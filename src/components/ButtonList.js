import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Button = ({ name, flag, setFlag }) => {
    return (<button
        className={flag ? 'px-3 w-max py-1 mr-3 rounded-lg bg-black text-white' :
            'px-3 w-fit py-1 mr-3 rounded-lg bg-gray-100 '}
        onClick={() => setFlag(name)}
    >{name}</button>);
}
const ButtonList = () => {
    const btnArray = ["All", "Music", "Comedy", "Cricket", "Motorcycles", "Smartphones", "Gaming", "Live", "Mixes", "Stocks", "Computer programming", "Physics", "Bollywood Music", "Mantras", "Conversation"];
    const [flag, setFlag] = useState('All');
    return (
        <div className='flex w-fit ml-12'>
            {btnArray.map((btn, index) => <Link key={index} to='/'><Button  name={btn} flag={flag === btn} setFlag={setFlag} /></Link>)}
        </div>
    )
}

export default ButtonList