import React from 'react'
import ShimmerCard from './ShimmerCard'

const SearchShimmer = () => {
  return (
    <div>
      <div className="flex filter m-2 p-2 justify-center px-10">
        <div className="w-125 h-15  bg-gray-200 mx-5 my-5"></div>
      </div>
      <div className="w-75 h-15  bg-gray-200 mx-5 my-5"></div>
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
  )
}

export default SearchShimmer