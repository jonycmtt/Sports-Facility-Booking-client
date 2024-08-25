import { Link } from "react-router-dom";

export type TServiceItem = {
  id: number;
  name: string;
  image: string;
};

const SingleService = ({ item }: { item: TServiceItem }) => {
  const { id, image, name } = item;
  return (
    <div className="group transition-all ">
      <Link to={`/service/${id}`}>
        <div className="h-96 bg-red-500 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transition-all  group-hover:scale-110 group-hover:-skew-x-3"
            src={image}
            alt=""
          />
        </div>

        <div className="text-center my-4">
          <h2 className="text-xl font-semibold text-[#333]">{name}</h2>
          <Link to={`/service/${id}`}>Learn More</Link>
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
