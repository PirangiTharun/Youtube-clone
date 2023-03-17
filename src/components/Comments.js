import React, { useState } from 'react'

const Comment = ({ comment }) => {
    console.log(comment);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
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
    return (
        <div className='my-4 flex items-center'>
            <div>
                <img className='rounded-full mr-4' src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt='user' />
            </div>
            <div>
                <p className='font-semibold'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                <p className='max-w-[1200px] break-words whitespace-normal'>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
                <div className='flex pr-4   items-center  mr-2'>
                    <button className='flex pr-4 justify-center' onClick={handleLike}>
                        <img className='h-6 flex justify-center pr-2' src={like ? "https://cdn-icons-png.flaticon.com/512/3415/3415739.png" : "https://cdn-icons-png.flaticon.com/512/3405/3405355.png"} alt="like" />
                        <p className='flex justify-center'>{getFormattedViews(comment?.snippet?.topLevelComment?.snippet?.likeCount)}</p>
                    </button>
                    <button className='flex' onClick={handleDislike}>
                        <img className='h-5' src={dislike ? "https://cdn-icons-png.flaticon.com/512/9334/9334003.png" : "https://cdn-icons-png.flaticon.com/512/9451/9451075.png"} alt="dislike" />
                        <p></p>
                    </button>
                    <p className='ml-4 cursor-pointer'>Reply</p>
                </div>
            </div>
        </div>
    )
}

const Comments = ({ comments }) => {
    console.log(comments);
    return (
        <div className='mt-8'>
            {comments.length > 0 && comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
        </div>
    )
}

export default Comments