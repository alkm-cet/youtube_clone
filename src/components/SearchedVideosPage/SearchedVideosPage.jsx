import React, { useContext } from 'react';
import './SearchedVideosPage.css';
//CONTEXT
import { VideoContext } from '../context/VideoContext';

function SearchedVideosPage() {

    const { searchedVideo } = useContext(VideoContext)

    return (
        <div className='SearchedVideosPage'>
            {
                searchedVideo?.items?.map(item =>
                    <div >
                        <img style={{width:'300px'}} src={item?.snippet?.thumbnails?.high?.url} alt="" />
                        {/* <h1>{item?.snippet?.title}</h1> */}
                    </div>
                )
            }
        </div>
    )
}

export default SearchedVideosPage