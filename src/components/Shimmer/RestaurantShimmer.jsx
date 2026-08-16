import React from 'react'
import ResShimmerCard from './ResShimmerCard'

const RestaurantShimmer = () => {
  return (
    <div>
      <div className=" flex filter m-1 justify-center px-10">
        <div className="w-[300px] h-[30px]  bg-gray-200 mx-1 my-2"></div>
      </div>
      <div className="flex filter m-1 justify-center px-10">
        <div className="w-[200px] h-[30px]  bg-gray-200 mx-5 my-2"></div>
      </div>
      <div className="flex flex-wrap justify-around my-5">
      <ResShimmerCard/>
      </div>
    </div>
  )
}

export default RestaurantShimmer