import React, { useState } from 'react';

const VideoDetails = ({ details }) => {
    const { snippet, statistics } = details;
    const { channelTitle, title, description } = snippet;
    const { likeCount, viewCount } = statistics;
    const [subscribe, setSubscribe] = useState(false);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const getFormattedViews = (views) => {
        const v = parseInt(views);
        if (v < 999) return v;
        else if (v > 999 && v < 1000000) return (v / 1000).toFixed(1) + "K";
        else if (v >= 1000000) return (v / 1000000).toFixed(1) + "M";
        return v;
    }
    const handleLike = () => {
        if (like) {
            setLike(false);
            setDislike(false);
        } else if (dislike) {
            setLike(true);
            setDislike(false);
        } else if (!like && !dislike) {
            setLike(true);
        }
    }
    const handleDislike = () => {
        if (like) {
            setLike(false);
            setDislike(true);
        } else if (dislike) {
            setLike(false);
            setDislike(false);
        } else if (!like && !dislike) {
            setDislike(true);
        }
    }
    const newDescription = description.length > 200 ? description.substring(0, 200) + "..." : description;
    return (
        <div>
            <h1 className='text-2xl font-semibold mt-2 mb-4'>{title}</h1>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='rounded-full h-10 mr-4' src="https://yt3.ggpht.com/wt7pDMA0P3dC5zL6qTZdR_EcImtT-U6GED2AnMrpLr8qpF1Oxtm2xB0DqiCBKSiG_sCcGtRbUg=s68-c-k-c0x00ffffff-no-rj" alt="channel logo" />
                    <h2 className='flex justify-center align-middle items-center text-center font-semibold text-lg mr-8'>{channelTitle}</h2>
                    <button className={subscribe ? 'bg-gray-300 text-black px-5 rounded-full font-semibold' : 'bg-black text-white px-5 rounded-full font-semibold'}
                        onClick={() => setSubscribe(!subscribe)}
                    >{subscribe ? 'Subscribed' : 'Subscribe'}</button>
                </div>
                <div className='flex'>
                    <div className='flex px-4 justify-center bg-gray-100 items-center rounded-full mx-2'>
                        <button className='flex pr-4 justify-center' onClick={handleLike}>
                            <img className='h-6 flex justify-center pr-2' src={like ? "https://cdn-icons-png.flaticon.com/512/3415/3415739.png" : "https://cdn-icons-png.flaticon.com/512/3405/3405355.png"} alt="like" />
                            <p className='flex justify-center'>{getFormattedViews(likeCount)}</p>
                        </button>
                        <button className='flex' onClick={handleDislike}>
                            <img className='h-5' src={dislike ? "https://cdn-icons-png.flaticon.com/512/9334/9334003.png" : "https://cdn-icons-png.flaticon.com/512/9451/9451075.png"} alt="dislike" />
                            <p></p>
                        </button>
                    </div>
                    <button className={'bg-gray-100 text-black px-5 rounded-full font-semibold mx-2'}>Share</button>
                    <button className={'bg-gray-100 text-black px-5 rounded-full font-semibold mx-2'}>Download</button>
                    <button className={'bg-gray-100 text-black px-5 rounded-full font-semibold mx-2'}>Save</button>
                </div>
            </div>
            <div className='bg-gray-100 rounded-lg mt-4 px-4 py-2 max-w-[1200px]'>
                <h2 className='font-semibold text-m'>{getFormattedViews(viewCount)} views</h2>
                <div className='max-w-fit'>
                    <pre className='break-words whitespace-pre-wrap'>{showMore ? description : newDescription}</pre>
                    {description.length > 200 && <button className='font-semibold' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>}
                </div>
            </div>
        </div>
    )
}

export default VideoDetails