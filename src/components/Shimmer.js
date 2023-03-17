import React from 'react'

const ShimmerCard = () => {
    return (
        <div>
            <div className="p-2 m-2 w-72 h-44 bg-gray-200 rounded-lg"></div>
            <div className="p-2 m-2 w-72 h-6 bg-gray-300 rounded-lg"></div>
            <div className="p-2 m-2 w-44 h-6 bg-gray-300 rounded-lg"></div>
        </div>
    );
}

const Shimmer = () => {
    return (
        <div className='flex flex-wrap justify-center'>
            {Array(20).fill(1).map((x, index) => <ShimmerCard key={index} />)}
        </div>
    )
}

export default Shimmer;