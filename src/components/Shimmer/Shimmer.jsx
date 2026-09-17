import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div>
      <div className="flex filter m-2 p-2 justify-between px-10">
        <div className="w-75 h-15  bg-gray-200 mx-5 my-5"></div>
        <div className="w-62.5 h-15  bg-gray-200 mx-5 my-5"></div>
      </div>
      <div className="flex flex-wrap justify-around my-5">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};
export default Shimmer;
