import { useGetAuthQuery } from "../../../../redux/features/auth/authApi";
import { Table, TableColumnsType, TableProps } from "antd";

export type TAuthData = {
  name: string;
  email: string;
  address: number;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  phone: string;
  profilePic: string;
};
interface DataType {
  key: React.Key;
  name: string;
  email: string;
  address: number;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  phone: string;
  profilePic: string;
}

const AllUsers = () => {
  const { data: sportsFacility, isFetching } = useGetAuthQuery(undefined);

  const tableData = sportsFacility?.data?.map(
    ({
      _id,
      name,
      email,
      phone,
      role,
      address,
      createdAt,
      updatedAt,
      profilePic,
    }: TAuthData) => ({
      key: _id,
      name,
      email,
      phone,
      role,
      address,
      createdAt,
      updatedAt,
      profilePic,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "profilePic",
      render: (profilePic) => {
        return (
          <>
            <img className="size-10 rounded-full" src={profilePic} alt="" />
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "role",
    },
    {
      title: "CreatedAt,",
      dataIndex: "createdAt",
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
      <h2 className="text-xl font-semibold text-[#333]">User</h2>

      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AllUsers;
