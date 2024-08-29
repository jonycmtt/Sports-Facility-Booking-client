const MissionStatement = () => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <h2 className="text-3xl font-bold text-[#333]">Our Vision</h2>
        <p className="text-sm my-6">
          We envision a thriving badminton ecosystem with innovative
          technologies that enhance skills and cultivate a love for the sport.
          Our platform inspires individuals to unleash their full potential in
          badminton.
        </p>
        <p className="text-sm ">
          We revolutionize badminton, empowering coaches and players to excel.
          Our platform offers comprehensive tools and support for growth within
          the badminton community. Join us and reach new heights of excellence!
        </p>
      </div>
      <div className="col-span-12 md:col-span-4 bg-[#097e52] text-white p-8 rounded-md">
        <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
        <p className="text-sm text-justify">
          We provide coaches and players with a seamless platform for
          connectivity, personalized insights, and educational resources.
          Together, we foster a collaborative community that supports growth and
          success in badminton.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
