import React from 'react'
import ResShimmerCard from './ResShimmerCard'

const RestaurantShimmer = () => {
  return (
    <div>
      <div className=" flex filter m-1 justify-center px-10">
        <div className="w-[300px] h-[40px]  bg-gray-300 mx-1 my-2"></div>
      </div>
      <div className="flex filter m-1 justify-center px-10">
        <div className="w-[500px] h-[30px]  bg-gray-300 mx-5 my-2"></div>
      </div>
      <h1 className='w-[300px] h-[30px] bg-gray-300 mx-62 '></h1>
      <div className="flex flex-wrap justify-around my-1">
        <ResShimmerCard />
        <ResShimmerCard />
        <ResShimmerCard />
        <ResShimmerCard />
      </div>
    </div>
  )
}

export default RestaurantShimmer