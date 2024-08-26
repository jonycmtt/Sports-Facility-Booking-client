import { LuUsers2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = {
    ADMIN: "admin",
    USER: "user",
  };
  const currentUser = user.ADMIN;
  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/facilities"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Facilities
        </NavLink>
      </li>
      {currentUser === "admin" ? (
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to="/user/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-nature text-white">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
            >
              {items}
            </ul>
          </div>
          <div>
            <img
              className="w-44"
              src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{items}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-sm sm:btn-md text-lg text-[#097e52]">
              <LuUsers2 />
              <span>Login/Register</span>
            </button>
          </Link>
        </div>
      </div>
      {/* <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="demo-logo text-white">
            <Link to="/">
              <h2 className="text-4xl font-bold">Sports</h2>
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={mainItemsGenerator(mainPaths)}
          />
        </Header>
      </Layout> */}
    </div>
  );
};

export default Navbar;
