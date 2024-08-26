const AboutImageGallery = () => {
  return (
    <div className="gap-4 my-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">
      <img
        className="col-span-3 rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-01.jpg"
        alt=""
      />
      <img
        className="col-span-6 rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-02.jpg"
        alt=""
      />
      <img
        className="col-span-3 rounded-md"
        src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/aboutus/banner-03.jpg"
        alt=""
      />
    </div>
  );
};

export default AboutImageGallery;
