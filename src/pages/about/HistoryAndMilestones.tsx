import SectionHeading from "../../utils/SectionHeading";

const HistoryAndMilestones = () => {
  const milestones = [
    {
      year: "2020",
      title: "Expansion to Europe",
      description:
        "We expanded our services to several countries in Europe, making booking easier for everyone.",
    },
    {
      year: "2022",
      title: "Mobile App Launched",
      description:
        "Our mobile app was launched, offering a seamless booking experience on the go.",
    },
    {
      year: "2023",
      title: "AI-Powered Recommendations",
      description:
        "Introduced AI-powered recommendations to enhance the user experience by suggesting the best facilities.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to new markets globally, making our services accessible to millions of new users.",
    },
    // Add more milestones as needed
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our History & " span=" Milestones" dec="" />

        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* History Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-700 mb-6">
              Our Journey
            </h3>
            <p className=" text-gray-600 mb-4">
              Since our inception, our goal has been to simplify the process of
              booking sports facilities. We started with a small team of
              passionate individuals who believed in the power of technology to
              bring people together through sports.
            </p>
            <p className=" text-gray-600 mb-4">
              Over the years, we have grown significantly, expanding our reach
              and enhancing our platform to meet the evolving needs of our
              users. Our journey has been marked by continuous innovation and a
              commitment to excellence.
            </p>
            <p className="text-lg text-gray-600">
              Today, we are proud to be a leading platform in the industry, with
              a presence in multiple countries and a growing community of users.
            </p>
          </div>

          {/* Milestones Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 h-full border-l-2 border-blue-600"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-10 pl-12">
                <div className="absolute left-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="ml-16">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {milestone.title}
                  </h4>
                  <p className="text-lg text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryAndMilestones;
