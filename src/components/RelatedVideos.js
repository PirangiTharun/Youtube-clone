import React from 'react';
import { Link } from 'react-router-dom';
import {dummyObj} from "../assets/constants/constants";

const RelatedVideo = ({ item }) => {
  const { snippet } = item;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='flex mb-4'>
      <img className='rounded-lg h-24 mr-4' src={thumbnails.medium.url} alt="" />
      <ul>
        <li className='font-semibold'>{title.substring(0, 70) + "..."}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
}

const RelatedVideos = ({ items }) => {
  return (
    <div className='ml-4'>
      {items.map((item) => <Link key={item.id.videoId} to={'/watch?v=' + item.id.videoId} state={dummyObj}><RelatedVideo item={item} /></Link>)}
    </div>
  )
}

export default RelatedVideos