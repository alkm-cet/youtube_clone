import React, { useContext } from 'react'
import './SingleVideoPage.css'
import { useParams } from 'react-router-dom'
//CONTEXT
import { VideoContext } from '../context/VideoContext';
// PAGES
import SingleVideocontainer from './SinglePageVideos/SingleVideocontainer'

function SingleVideoPage() {

    const { video } = useContext(VideoContext);
    const { id } = useParams();
    const SingleVideo = video?.items?.find((vid) => vid.id === id)

    return (
        <div className='SingleVideoPage'>

            <div className="singlepageleft">
                <iframe className='iframe' src={`https://www.youtube.com/embed/${id}`} allowfullscreen frameborder="0" allow='autoplay'></iframe>

                <h3 style={{ fontSize: '20px' }}>{SingleVideo?.snippet?.title}</h3>
            </div>

            <div className="singlepageright">
                <SingleVideocontainer/>
            </div>


        </div>
    )
}

export default SingleVideoPage