import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetFacilitiesQuery } from "../../redux/features/facilities/facilitiesApi";
import HeaderBanner from "../../utils/HeaderBanner";
import { GetProps, Input } from "antd";
import SingleFactureFacilities, {
  TFacilitiesDataType,
} from "../Landing/features/SingleFactureFacilities";

type SearchProps = GetProps<typeof Input.Search>;

const FacilitiesContainer = () => {
  const { data: facilities, isLoading } = useGetFacilitiesQuery(undefined);
  console.log(facilities?.data);
  if (isLoading) {
    return <span>loading...</span>;
  }
  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value) => console.log(value);

  const filterSubmit: SubmitHandler<FieldValues> = (data) => {
    data.preventDefault();

    const minPrice = Number(data.target.minPrice.value);
    const maxPrice = Number(data.target.maxPrice.value);
    const filterInfo = {
      minPrice,
      maxPrice,
    };
    console.log(filterInfo);
  };

  return (
    <div>
      <HeaderBanner title={"Sport Facilities"} page={"facilities"} />
      <div className="max-w-6xl mx-auto my-12">
        <div className=" flex justify-between items-center border rounded-md shadow-sm bg-white p-4 px-8">
          <div>
            <strong className="text-[#333] font-normal">
              <span className="text-[#097E52] font-semibold">
                {facilities?.data.length}{" "}
              </span>
              facilities are listed
            </strong>
          </div>
          <div>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="middle"
              onSearch={onSearch}
            />
          </div>
          <div className="border p-3 rounded">
            <form onSubmit={filterSubmit} className="space-x-2">
              <input
                type="text"
                name="minPrice"
                placeholder="Price"
                className="input input-sm input-bordered w-20"
              />
              <input
                type="text"
                name="maxPrice"
                placeholder="Price"
                className="input input-sm input-bordered w-20"
              />
              <button type="submit" className="btn btn-neutral btn-sm">
                Filter
              </button>
            </form>
          </div>
        </div>

        <div className="grid my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities?.data?.map((item: TFacilitiesDataType) => (
            <SingleFactureFacilities button="View Details" item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesContainer;
