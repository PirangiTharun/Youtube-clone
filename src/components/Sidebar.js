import React from 'react';
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isOpen = useSelector((store) => store.sideBar.isOpen);
    if (!isOpen) return <></>;
    return (
        <div className='w-full max-w-[14rem] px-5'>
            <ul >
                <li className='p-2 h-10 bg-gray-200 cursor-pointer rounded-lg'>Home</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Shorts</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Subscriptions</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Originals</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>YouTube Music</li>
            </ul>
            <hr className='mt-4' />
            <ul>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Library</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>History</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Your Videos</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Watch later</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Downloads</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Liked Videos</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Show more</li>
            </ul>
            <hr className='mt-4'/>
            <ul>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Trending</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Shopping</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Music</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Live</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Gaming</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>News</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Sports</li>
                <li className='p-2 h-10 hover:bg-gray-200 cursor-pointer rounded-lg'>Learning</li>
            </ul>
        </div>
    )
}

export default Sidebar;