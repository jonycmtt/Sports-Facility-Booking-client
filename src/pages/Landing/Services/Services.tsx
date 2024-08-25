import { useEffect, useState } from "react";
import SectionHeading from "../../../utils/SectionHeading";
import SingleService, { TServiceItem } from "./singleService";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return (
    <div className="my-20 max-w-6xl mx-auto">
      <SectionHeading
        title="Explore Our"
        span="Services"
        dec="Fostering excellence and empowering sports growth through tailored services for athletes, coaches, and enthusiasts."
      />
      <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-50">
        {data?.map((item: TServiceItem) => (
          <SingleService item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
