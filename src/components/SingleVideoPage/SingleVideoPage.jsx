import React, { useContext } from 'react'
import './SingleVideoPage.css'
import { useParams } from 'react-router-dom'
//CONTEXT
import { VideoContext } from '../context/VideoContext'

function SingleVideoPage() {

    const { video } = useContext(VideoContext);
    const { id } = useParams();
    const SingleVideo = video?.items?.find((vid) => vid.id === id)

    return (
        <div className='SingleVideoPage'>

            <iframe className='iframe' src={`https://www.youtube.com/embed/${id}`} allowfullscreen frameborder="0" allow='autoplay'>

            </iframe>
        </div>
    )
}

export default SingleVideoPage