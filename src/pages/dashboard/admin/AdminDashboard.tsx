import { Badge } from "antd";
import { useAppSelector } from "../../../redux/hook";
import { selectCurrentUser } from "../../../redux/features/authSlice";

const AdminDashboard = () => {
  const loginUser = useAppSelector(selectCurrentUser);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 my-10">
        <div className="bg-[#FFE4DD] col-span-8  p-5 rounded-xl grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#333]">
              Welcome back{" "}
              <span className="primary-liner">{loginUser?.user.name}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 outfit">
              We're thrilled to have you here again. Dive in and pick up where
              you left off. Let's achieve great things together!
            </p>
          </div>
          <div className="-mt-16">
            <img
              src="https://templates.iqonic.design/product/lite/server360/images/page-img/37.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative col-span-4 text-center flex justify-start items-center flex-col border py-6 gap-3">
          <img
            className="size-24 rounded-full"
            alt={loginUser?.user.name}
            src={loginUser?.user.profilePic}
          />
          <div>
            <h2 className="text-lg font-bold text-[#333]">
              {" "}
              Name : {loginUser?.user.name}
            </h2>
            <h3 className="font-semibold text-[#666]">
              Gmail :{loginUser?.user.email}
            </h3>
          </div>
          <div className="absolute top-0 right-0">
            <Badge.Ribbon
              text={loginUser?.user.role}
              color="magenta"
            ></Badge.Ribbon>
          </div>
        </div>
      </div>
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Facilities</div>
          <div className="stat-value">31K </div>
          <div className="stat-desc">Items</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
