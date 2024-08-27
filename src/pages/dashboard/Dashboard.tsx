import { Button, Layout } from "antd";
import Sidebar from "../../components/layout/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout, selectCurrentUser } from "../../redux/features/authSlice";

const { Content } = Layout;

const Dashboard = () => {
  const loginUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Layout className="h-screen overflow-auto">
      <Sidebar />
      <Layout>
        <div className="flex py-2 bg-[#222] justify-between items-center px-6 bg-">
          <div className="text-white">
            <div>
              <h2 className="text-lg font-bold">Dashboard</h2>
              <p className="text-[#ddd] outfit">
                Hi There, Great to see you again
              </p>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                  alt={loginUser?.user.name}
                  src={loginUser?.user.profilePic}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] -mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {loginUser?.user.name}
                  <span className="badge">{loginUser?.user.role}</span>
                </a>
              </li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            </ul>
          </div>
        </div>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
