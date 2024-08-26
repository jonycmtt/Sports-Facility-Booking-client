import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import SectionHeading from "../../utils/SectionHeading";

const ContactInfo = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact " span=" Use" dec="" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Method: Email */}
          <div className="  flex items-center">
            <FaEnvelope className="h-12 w-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-lg text-gray-600">info@sportbooking.com</p>
            </div>
          </div>

          {/* Contact Method: Phone */}
          <div className="flex items-center">
            <FaPhone className="h-12 w-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Contact Method: Address */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="h-12 w-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-lg text-gray-600">
                123 Sport Ave, New York, NY 10001, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
