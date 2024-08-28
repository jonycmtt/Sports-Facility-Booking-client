/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { useGetFacilitiesQuery } from "../../redux/features/facilities/facilitiesApi";
import { Button, Modal, Table, TableColumnsType, TableProps } from "antd";
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
};
interface DataType {
  key: React.Key;
  name: string;
  location: string;
  pricePerHour: number;
  description: string;
  image: string;
}

const FacilitiesContant = () => {
  const { data: sportsFacility, isFetching } = useGetFacilitiesQuery(undefined);

  const tableData = sportsFacility?.data?.map(
    ({
      _id,
      name,
      description,
      image,
      pricePerHour,
      location,
    }: TFacilitiesData) => ({
      key: _id,
      name,
      description,
      image,
      pricePerHour,
      location,
    })
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(
    null
  );

  const showModal = (facility: any) => {
    setIsModalOpen(true);
    setSelectedFacility(facility);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(selectedFacility);

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
              onClick={() => showModal(record)}
              className="border-blue-700  p-2"
            >
              <MdOutlineRemoveRedEye />
            </Button>
            <Button className="border-green-700  p-2">
              <LuClipboardEdit />
            </Button>
            <Button className="border-red-700 text-lg p-2">
              <MdDeleteOutline />
            </Button>
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
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
    </div>
  );
};

export default FacilitiesContant;
