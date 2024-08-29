/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import {
  useDeleteFacilitiesMutation,
  useGetFacilitiesQuery,
  useUpdateFacilitiesMutation,
} from "../../redux/features/facilities/facilitiesApi";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  PopconfirmProps,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { LuClipboardEdit } from "react-icons/lu";
// import { toast } from "sonner";
import { useState } from "react";

export type TFacilitiesData = {
  name: string;
  location: string;
  pricePerHour: number;
  description: string;
  image: string;
  _id: string;
  isDeleted: boolean;
};
interface DataType {
  key: React.Key;
  name: string;
  location: string;
  pricePerHour: number;
  description: string;
  image: string;
  isDeleted: boolean;
}

const FacilitiesContant = () => {
  const { data: sportsFacility, isFetching } = useGetFacilitiesQuery(undefined);
  const [deleteFacility] = useDeleteFacilitiesMutation({});
  const [updateFacility] = useUpdateFacilitiesMutation();

  const tableData = sportsFacility?.data?.data
    ?.filter((facility: TFacilitiesData) => !facility.isDeleted)
    .map(
      ({
        _id,
        name,
        description,
        image,
        pricePerHour,
        location,
        isDeleted,
      }: TFacilitiesData) => ({
        key: _id,
        name,
        description,
        image,
        pricePerHour,
        location,
        isDeleted,
      })
    );

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(
    null
  );

  // show view modal
  const showViewModal = (facility: any) => {
    setIsViewModalOpen(true);
    setSelectedFacility(facility);
  };

  // const handleOk = () => {
  //   setIsViewModalOpen(false);
  // };

  const handleViewCancel = () => {
    setIsViewModalOpen(false);
  };

  // delete

  const handleDelete = async (id: string) => {
    try {
      await deleteFacility(id).unwrap();
      message.success("Facility deleted successfully");
    } catch (error) {
      console.log(error);
      message.error("Failed to delete facility");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  // update modal
  const [form] = Form.useForm();
  const showEditModal = (facility: DataType | null = null) => {
    setIsEditModalOpen(true);
    console.log(facility);
    setSelectedFacility(facility);

    if (facility) {
      form.setFieldsValue({
        name: facility.name,
        location: facility.location,
        pricePerHour: facility.pricePerHour,
        description: facility.description,
        image: facility.image,
      });
    } else {
      form.resetFields();
    }
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const onFinish = async (values: DataType) => {
    if (selectedFacility) {
      try {
        await updateFacility({
          id: selectedFacility.key as string,
          data: { ...values },
        }).unwrap();
        message.success("Facility updated successfully");
        setIsEditModalOpen(false);
      } catch (error) {
        console.log(error);
        message.error("Failed to update facility");
      }
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "image",
      render: (image) => {
        return (
          <>
            <img className="size-10 rounded-full" src={image} alt="" />
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
    },
    {
      title: "Action",
      render: (_, record) => {
        console.log(record);
        return (
          <div className="flex items-center gap-2 ">
            <Button
              onClick={() => showViewModal(record)}
              className="border-blue-700  p-2"
            >
              <MdOutlineRemoveRedEye />
            </Button>
            {/* update */}
            <Button
              onClick={() => showEditModal(record)}
              className="border-green-700  p-2"
            >
              <LuClipboardEdit />
            </Button>
            {/* delete */}
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this Facility?"
              onConfirm={() => handleDelete(record.key as string)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button className="border-red-700 text-lg p-2">
                <MdDeleteOutline />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#333]">
        All Sport Facilities
      </h2>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Modal
        open={isViewModalOpen}
        onCancel={handleViewCancel}
        footer={null}
        centered
      >
        {selectedFacility && (
          <>
            <h2 className="text-xl">
              <strong>Name:</strong> <span>{selectedFacility.name}</span>
            </h2>

            <img
              className="w-full rounded-lg my-4"
              src={selectedFacility.image}
              alt={selectedFacility.name}
            />

            <p>
              <strong>Location:</strong> {selectedFacility.location}
            </p>
            <p>
              <strong>Price Per Hour:</strong> ${selectedFacility.pricePerHour}
            </p>
            <p>
              <strong>Description:</strong> {selectedFacility.description}
            </p>
          </>
        )}
      </Modal>
      {/* Edit Modal */}
      <Modal
        title="Edit Facility"
        open={isEditModalOpen}
        onCancel={handleEditCancel}
        footer={[
          <Button key="cancel" onClick={handleEditCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Save
          </Button>,
        ]}
        centered
      >
        {selectedFacility && (
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input the name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                { required: true, message: "Please input the location!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Price Per Hour"
              name="pricePerHour"
              rules={[
                { required: true, message: "Please input the price per hour!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label="Image URL"
              name="image"
              rules={[
                { required: true, message: "Please input the image URL!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default FacilitiesContant;
