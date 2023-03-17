import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API_URL, YOUTUBE_RELATED_API_URL } from '../assets/constants/constants';
import Comments from './Comments';
import RelatedVideos from './RelatedVideos';
import VideoDetails from './VideoDetails';

const ViewPage = () => {
    const location = useLocation();
    const videoDetails = location.state;
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getRelatedVideos();
        getComments();
        // eslint-disable-next-line
    }, [location]);
    const getComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API_URL.replace("***", location.search.split("=")[1]));
        const json = await data.json();
        setComments(json.items);
    }
    const getRelatedVideos = async () => {
        const data = await fetch(YOUTUBE_RELATED_API_URL.replace("***", location.search.split("=")[1]));
        const json = await data.json();
        setRelatedVideos(json.items);
    }
    return (
        <div className='p-2 flex justify-start'>
            <div>
                <div>
                    <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + location.search.split("=")[1]}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <VideoDetails details={videoDetails} />
                <Comments comments={comments}/>
            </div>
            <RelatedVideos items={relatedVideos} />
        </div>
    )
}

export default ViewPage;