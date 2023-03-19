import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../assets/constants/constants';
import { updateSearchQuery } from '../redux/SearchQuerySlice';

const SearchSuggestions = ({ query, setSearchQuery, setShow}) => {
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(getSuggestions, 200);

        return(()=>{
            clearTimeout(timer);
        });
        // eslint-disable-next-line
    }, [query]);
    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + query);
        const json = await data.json();
        setSuggestions(json[1]);
    };
    const handleClick = (key) => {
        console.log(key);
        setSearchQuery(key);
        setShow(false);
        dispatch(updateSearchQuery(key));
    }
    if (query.length === 0) return null;
    return (
        <div className="fixed mt-10 bg-white py-2 px-2 w-[39rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
                {suggestions.length > 0 && suggestions.map((s) => (
                    <li onClick={() => handleClick(s)} key={s} className="flex text-center py-2 px-3 cursor-default shadow-sm hover:bg-gray-100 font-semibold">
                        <img className='h-5 pr-4 mt-1 justify-center' src="https://img.icons8.com/fluency-systems-regular/256/search.png" alt="" /> {s}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchSuggestions