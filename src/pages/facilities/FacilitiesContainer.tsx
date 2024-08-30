import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetFacilitiesQueryQuery } from "../../redux/features/facilities/facilitiesApi";
import HeaderBanner from "../../utils/HeaderBanner";
import { GetProps, Input, Pagination } from "antd";
import SingleFactureFacilities, {
  TFacilitiesDataType,
} from "../Landing/features/SingleFactureFacilities";

import { useState } from "react";
import { TQueryParams } from "../../types/global";

type SearchProps = GetProps<typeof Input.Search>;

const FacilitiesContainer = () => {
  const [fieldQuery, setFieldQuery] = useState<TQueryParams[]>([
    { name: "page", value: 1 },
    { name: "limit", value: 6 },
  ]);
  const { data: facilities, isLoading } =
    useGetFacilitiesQueryQuery(fieldQuery);
  console.log(facilities);
  const filterFacilitiesData = facilities?.data?.data?.filter(
    (item: { isDeleted: boolean }) => item.isDeleted !== true
  );

  // const filterFacilitiesData = facilities?.data || []; // Assume `facilities.data` is the paginated data
  const totalFacilities = facilities?.data?.meta.total || 0; // Assume `facilities.meta.total` is the total count
  const currentPage =
    Number(fieldQuery.find((q) => q.name === "page")?.value) || 1;
  const pageSize =
    Number(fieldQuery.find((q) => q.name === "limit")?.value) || 6;

  if (isLoading) {
    return <span>loading...</span>;
  }

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value) => {
    setFieldQuery((prev) => [
      ...prev.filter((q) => q.name !== "search"),
      { name: "search", value: value },
      { name: "page", value: 1 },
    ]);
  };

  const filterSubmit: SubmitHandler<FieldValues> = (data) => {
    data.preventDefault();

    const minPrice = Number(data.target.minPrice.value);
    const maxPrice = Number(data.target.maxPrice.value);
    setFieldQuery((prev) => [
      ...prev.filter((q) => q.name !== "minPrice" && q.name !== "maxPrice"),
      {
        name: "minPrice",
        value: minPrice,
      },
      {
        name: "maxPrice",
        value: maxPrice,
      },
      { name: "page", value: 1 },
    ]);
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setFieldQuery((prev) => [
      ...prev.filter((q) => q.name !== "page" && q.name !== "limit"),
      { name: "page", value: page },
      { name: "limit", value: pageSize },
    ]);
  };

  return (
    <div>
      <HeaderBanner title={"Sport Facilities"} page={"facilities"} />
      <div className="max-w-6xl mx-auto my-12 px-4 xl:px-0">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center  border rounded-md shadow-sm bg-white p-4 px-8">
          <div>
            <strong className="text-[#333] font-normal">
              <span className="text-[#097E52] font-semibold">
                {filterFacilitiesData?.length}
              </span>{" "}
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
                placeholder="Min Price"
                className="input text-xs input-sm input-bordered w-20"
              />
              <input
                type="text"
                name="maxPrice"
                placeholder="Max Price"
                className="input input-sm text-xs input-bordered w-20"
              />
              <button type="submit" className="btn btn-neutral btn-sm">
                Filter
              </button>
            </form>
          </div>
        </div>

        <div className="grid my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterFacilitiesData.length ? (
            <>
              {" "}
              {filterFacilitiesData.map((item: TFacilitiesDataType) => (
                <SingleFactureFacilities button="View Details" item={item} />
              ))}
            </>
          ) : (
            <div className="flex col-span-12 justify-center items-center w-full text-center">
              <h2>Not Data Found</h2>
            </div>
          )}
        </div>
        {/* Pagination Component */}
        <div className="flex justify-center mt-8">
          <Pagination
            current={Number(currentPage)}
            pageSize={Number(pageSize)}
            total={totalFacilities}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesContainer;
