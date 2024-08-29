import { Table, TableColumnsType, TableProps } from "antd";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetBookingQuery } from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hook";

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

const BookingItems = () => {
  const selectUser = useAppSelector(selectCurrentUser);
  const currentBookingUser = selectUser?.user._id;
  const { data: bookingData, isFetching } =
    useGetBookingQuery(currentBookingUser);

  const tableData = bookingData?.data?.map(
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
          <button className="btn btn-sm bg-success text-white">
            {isBooked && "Confirmed"}
          </button>
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
          My Booking Data
        </h2>

        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
};

export default BookingItems;
