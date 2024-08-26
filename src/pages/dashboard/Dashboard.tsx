import { Button, Layout } from "antd";
import Sidebar from "../../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const Dashboard = () => {
  const handleLogout = () => {
    console.log("logout");
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
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] -mt-3 w-52 p-2 shadow"
            >
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
