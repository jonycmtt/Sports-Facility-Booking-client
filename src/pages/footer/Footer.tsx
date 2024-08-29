import { Select } from "antd";
import { AiOutlineDollar } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaApple, FaFacebook } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { LuUserCog2 } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="pt-16 bg-[#0a1a38] text-white px-4 xl:px-0">
      <div className="text-center">
        <h1 className="text-3xl font-bold ">
          We Welcome Your Passion And Expertise
        </h1>
        <p className="text-[#ccc] mb-6">
          Join our empowering sports community today and grow with us.
        </p>
        <button className="btn bg-[#097e52] text-white border-[#097e52] hover:bg-[#333] hover:text-white hover:border-[#333]">
          <LuUserCog2 className="text-lg" />
          Join With Us
        </button>
      </div>

      <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:col-span-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 mx-auto py-8 border-t border-[#1d3563] px-4 xl:px-0">
        <div>
          <h2 className="text-xl font-bold">Contact us</h2>
          <div className="mt-4">
            <small className="text-[#ccc]">Toll free Customer Care</small>
            <p>+017 123 456 78</p>
          </div>
          <div className="my-4">
            <small className="text-[#ccc]">Need Live Suppot</small>
            <p>dreamsports@example.com</p>
          </div>
          <ul className="flex items-center gap-4 text-lg">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <LiaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Locations</h2>
          <ul className="mt-4 text-[#ccc] space-y-2">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Germany</a>
            </li>
            <li>
              <a href="#">Russia</a>
            </li>
            <li>
              <a href="#">France</a>
            </li>
            <li>
              <a href="#">UK</a>
            </li>
            <li>
              <a href="#">Colombia</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Download</h2>
          <div className="my-4">
            <button className="btn">
              <div className="flex items-center gap-2">
                <FaApple className="text-2xl" />
                <div>
                  <small>Download on the</small>
                  <p>App Store</p>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              <div className="flex items-center gap-2">
                <IoLogoGooglePlaystore className="text-2xl" />
                <div>
                  <small>Download on the</small>
                  <p>App Store</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-10 border-[#1d3563] border-t">
        <p>© 2024DreamSports - All rights reserved.</p>
        <div>
          <Select
            defaultValue="english"
            style={{ width: 140, background: "transparent" }}
            // onChange={handleChange}
            options={[
              {
                value: "english",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <TbWorld className="text-lg" />
                      English (US)
                    </div>
                  </>
                ),
              },
              {
                value: "uk",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <TbWorld className="text-lg" />
                      UK
                    </div>
                  </>
                ),
              },
              {
                value: "japan",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <TbWorld className="text-lg" />
                      Japan
                    </div>
                  </>
                ),
              },
            ]}
          />
          <Select
            className="ml-4"
            defaultValue="usd"
            style={{ width: 140 }}
            // onChange={handleChange}
            options={[
              {
                value: "usd",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <AiOutlineDollar className="text-lg" />
                      USD
                    </div>
                  </>
                ),
              },
              {
                value: "euro",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <AiOutlineDollar className="text-lg" />
                      Euro
                    </div>
                  </>
                ),
              },
              {
                value: "japan",
                label: (
                  <>
                    <div className="flex items-center gap-1">
                      <TbWorld className="text-lg" />
                      Japan
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
