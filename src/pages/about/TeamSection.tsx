import { useEffect, useState } from "react";
import SectionHeading from "../../utils/SectionHeading";
import SingleTeam from "./SingleTeam";

const TeamSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className="my-20">
      <SectionHeading
        title="Our"
        span="Team"
        dec="Our team united by passion, driven by excellence."
      />
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((item, index) => (
          <SingleTeam key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
