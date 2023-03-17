import React, {useEffect, useState} from 'react';
import { dummyObj, YOUTUBE_SEARCH_VIDEOS_API } from '../assets/constants/constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleVideo = ({ item }) => {
    const { snippet } = item;
    const { description, channelTitle, title, thumbnails } = snippet;
    return (
        <div className='flex mb-4'>
            <img className='rounded-lg  mr-4' src={thumbnails.medium.url} alt="" />
            <ul>
                <li className='font-semibold'>{title.length > 150 ? title.substring(0, 150).replace("&#39;","'") + "..." : title.replace("&#39;","'")}</li>
                <li>{channelTitle}</li>
                <li>{description.length>200?description.substring(0,200)+"...":description}</li>
            </ul>
        </div>
    );
}

const SearchVideos = () => {
    const [videos, setVideos] = useState([]);
    const query = useSelector((store)=>store.searchQuery.key);
    useEffect(()=>{
        getSearchVideos();
        // eslint-disable-next-line
    },[query]);
    const getSearchVideos = async() =>{
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API.replace("***",query));
        const json = await data.json();
        setVideos(json.items);
    }
    return (
        <div className='ml-36'>
            {videos.length>0 && videos.map((item)=><Link to={"/watch?v="+item.id.videoId} state={dummyObj} ><SingleVideo key={item.id.videoId} item={item} /></Link>)}
        </div>
    )
}

export default SearchVideos