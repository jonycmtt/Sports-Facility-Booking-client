const AboutImageGallery = () => {
  return (
    <div className="gap-4 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <img
        className="w-full object-cover h-72 rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-01.jpg"
        alt=""
      />
      <img
        className="w-full h-72 object-cover  rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-02.jpg"
        alt=""
      />
      <img
        className=" w-full h-72 object-cover  rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-03.jpg"
        alt=""
      />
    </div>
  );
};

export default AboutImageGallery;
