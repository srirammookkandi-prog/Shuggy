import React from 'react'
import ResShimmerCard from './ResShimmerCard'

const RestaurantShimmer = () => {
  return (
    <div>
      <div className=" flex filter m-1 justify-center px-10">
        <div className="w-75 h-10  bg-gray-300 mx-1 my-2"></div>
      </div>
      <div className="flex filter m-1 justify-center px-10">
        <div className="w-125 h-7.5  bg-gray-300 mx-5 my-2"></div>
      </div>
      <h1 className='w-75 h-7.5 bg-gray-300 mx-62 '></h1>
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