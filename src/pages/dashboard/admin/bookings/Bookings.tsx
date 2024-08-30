/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetBookingQuery } from "../../../../redux/features/booking/bookingApi";
import { Table, TableColumnsType, TableProps } from "antd";

export type TBookingData = {
  date: string;
  startTime: string;
  endTime: string;
  role: string;
  facility: string;
  payableAmount: number;
  isBooked: string;
  _id: string;
};

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  role: string;
  facility: string;
  payableAmount: number;
  isBooked: string;
}

const Bookings = () => {
  const { data: bookingItems, isFetching } = useGetBookingQuery(undefined);
  const tableData = bookingItems?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      role,
      facility,
      payableAmount,
      isBooked,
    }: TBookingData) => ({
      key: _id,
      date,
      startTime,
      endTime,
      role,
      facility,
      payableAmount,
      isBooked,
    })
  );
  console.log(bookingItems);

  // const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  // const [selectedBookings, setBookings] = useState<DataType | null>(null);
  // // show view modal
  // const showViewModal = (booking: any) => {
  //   setIsViewModalOpen(true);
  //   setBookings(booking);
  // };

  // const handleViewCancel = () => {
  //   setIsViewModalOpen(false);
  // };

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "facility",
      render: (facility) => {
        return (
          <>
            <img className="size-10  rounded" src={facility?.image} alt="" />
          </>
        );
      },
    },
    {
      title: "Facility",
      dataIndex: "facility",
      render: (facility) => {
        return (
          <>
            <span>{facility?.name}</span>
          </>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "payableAmount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      render: (isBooked) => {
        return (
          <>
            {isBooked === "confirmed" ? (
              <button
                // onClick={() => showViewModal(record)}
                className=" bg-success p- px-2 rounded-full capitalize text-white"
              >
                {isBooked}
              </button>
            ) : (
              <button
                // onClick={() => showViewModal(record)}
                className="bg-info p- px-2 rounded-full capitalize text-white"
              >
                {isBooked}
              </button>
            )}
          </>
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
      <div>
        <h2 className="text-xl font-semibold text-[#333] mb-6">
          All Booking Data
        </h2>

        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>

      {/* view modal  */}
      {/* <Modal
        open={isViewModalOpen}
        onCancel={handleViewCancel}
        footer={null}
        centered
      >
        {selectedBookings && (
          <>
            <h2 className="text-xl">
              <strong>Name:</strong> <span>{selectedBookings.name}</span>
            </h2>

            <img
              className="w-full rounded-lg my-4"
              src={selectedBookings.image}
              alt={selectedBookings.name}
            />

            <p>
              <strong>Location:</strong> {selectedBookings.location}
            </p>
            <p>
              <strong>Price Per Hour:</strong> ${selectedBookings.pricePerHour}
            </p>
            <p>
              <strong>Description:</strong> {selectedBookings.description}
            </p>
          </>
        )}
      </Modal> */}
    </div>
  );
};

export default Bookings;
