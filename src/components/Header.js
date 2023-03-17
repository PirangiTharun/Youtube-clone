import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/SideBarSlice';
import SearchSuggestions from './SearchSuggestions';
import {updateSearchQuery} from '../redux/SearchQuerySlice';


const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [show, setShow] = useState(true);
    const handleChange=(e)=>{
        setSearchQuery(e.target.value);
    }
    const handleClick=()=>{
        if(searchQuery.length>0){
            dispatch(updateSearchQuery(searchQuery));
        }
        setShow(false);
    }
    
    return (
        <nav className='p-2 m-2 grid grid-flow-col'>
            <div className='flex col-span-1'>
                <img
                    onClick={()=>dispatch(toggleSidebar())}
                    className="h-8 cursor-pointer pr-2"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <a href="/">
                    <img
                        className="h-8 mx-2"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>
            <div className='flex col-span-10 justify-center'>
                <input onFocus={()=>setShow(true)}  className='w-[40%] pl-5 px-4 content-center h-10 flex justify-center border rounded-l-full border-gray-500' type={'text'} value={searchQuery} onChange={handleChange} placeholder='Search' />
                <button className='px-5 border border-gray-500 bg-gray-100 border-l-0 rounded-r-full'
                    onClick={handleClick}
                ><img className='h-6' src="https://img.icons8.com/ios-glyphs/256/search--v1.png" alt="search icon" /></button>
                {show && <SearchSuggestions query={searchQuery} setSearchQuery={setSearchQuery} setShow={setShow}/>}
            </div>
            <div className='flex col-span-1 justify-center'>
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/256/external-user-interface-kiranshastry-lineal-kiranshastry.png" alt=""
                    className='h-9 cursor-pointer' />
            </div>
        </nav>
    )
}

export default Header