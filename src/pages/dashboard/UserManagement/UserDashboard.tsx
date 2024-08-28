import { Badge } from "antd";
import { useAppSelector } from "../../../redux/hook";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const UserDashboard = () => {
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
    </div>
  );
};

export default UserDashboard;
