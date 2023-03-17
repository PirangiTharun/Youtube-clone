import React from 'react';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const getFormattedViews = (views)=>{
        const v = parseInt(views);
        if(v<999) return v;
        else if(v>999 && v<1000000) return (v/1000).toFixed(1)+"K";
        else if(v>=1000000) return (v/1000000).toFixed(1)+"M";
        return v;
    }
    return (
        <div className="p-2 m-2 w-72">
            <img className="rounded-lg" src={thumbnails.medium.url} alt='' />
            <ul>
                <li className="font-semibold py-2">{title.length>70?title.substring(0,70)+"...":title}</li>
                <li>{channelTitle}</li>
                <li>{getFormattedViews(statistics.viewCount)} views</li>
            </ul>
        </div>
    )
}

export default VideoCard