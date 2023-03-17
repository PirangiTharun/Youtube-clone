import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../assets/constants/constants';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
import ButtonList from './ButtonList';
import SearchVideos from './SearchVideos';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  }
  const query = useSelector((store) => store.searchQuery.key);
  if (videos.length === 0) return <Shimmer />;
  return (
    <div>
      {query.length > 0 ? <SearchVideos /> :
        <>
          <ButtonList />
          <div className='flex flex-wrap justify-center'>
            {videos.map((video) => <Link key={video.id} to={'/watch?v=' + video.id} state={video} >
              <VideoCard info={video} />
            </Link>)}
          </div>
        </>
      }

    </div>
  )
}

export default VideoContainer;