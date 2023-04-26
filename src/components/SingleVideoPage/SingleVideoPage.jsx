import React, { useContext } from 'react'
import './SingleVideoPage.css'
import { useParams } from 'react-router-dom'
//CONTEXT
import { VideoContext } from '../context/VideoContext';
// PAGES
import SingleVideocontainer from './SinglePageVideos/SingleVideocontainer'
//IMAGES
import like from '../../images/like.png'
import dislike from '../../images/dislike.png'
import share from '../../images/share.png'
import download from '../../images/download.png'
import donation from '../../images/donation.png'
import clip from '../../images/clip.png'


function SingleVideoPage() {

    const { video } = useContext(VideoContext);
    const { id } = useParams();
    const SingleVideo = video?.items?.find((vid) => vid.id === id)

    //------------------------
    function utcToTimeAgo(utcDate) {
        const localDate = new Date(utcDate); // UTC tarihini yerel tarihe dönüştür
        const now = new Date(); // Şu anki tarih ve saat

        // İki tarih arasındaki farkı hesapla
        const diff = Math.abs(now - localDate);
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        // Sonucu istenen formatta döndür
        if (days > 0) {
            return days + " day ago";
        } else if (hours > 0) {
            return hours + " hour ago";
        } else {
            return minutes + " minute ago";
        }
    }
    //-----------------------
    function breakString(str) {
        const newStr = str.replace(/\. /g, '\n'); // Her nokta ve boşluktan sonra alt satıra geç
        return newStr;
    }


    return (
        <div className='SingleVideoPage'>

            <div className="singlepageleft">
                <iframe className='iframe' src={`https://www.youtube.com/embed/${id}`} allowfullscreen frameborder="0" allow='autoplay' allowFullScreen></iframe>

                <h3 style={{ fontSize: '20px' }}>{SingleVideo?.snippet?.title}</h3>

                <div className="singlelefvideoinfo">
                    <div className="svdileft">
                        <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} src={SingleVideo?.snippet?.thumbnails?.medium?.url} alt="" />

                        <div className="videoinfochannalname">
                            <h4>{SingleVideo?.snippet?.channelTitle}</h4>
                            <p>1m subscribers</p>
                        </div>

                        <button className='infoBTN'>Join</button>
                        <button className='infoBTN'>Subscribe</button>
                    </div>

                    <div className="svdiright">
                        <button className='infoBTN'>
                            <img src={like} alt="" style={{ width: '20px' }} />
                            Like
                            <img src={dislike} alt="" style={{ width: '20px' }} />
                            Dislike
                        </button>
                        <button className='infoBTN'>
                            <img src={share} alt="" style={{ width: '20px' }} />
                            Share
                        </button>
                        <button className='infoBTN'>
                            <img src={download} alt="" style={{ width: '20px' }} />
                            Download</button>
                        <button className='infoBTN'>
                            <img src={donation} alt="" style={{ width: '20px' }} />
                            Thanks</button>
                        <button className='infoBTN'>
                            <img src={clip} alt="" style={{ width: '20px' }} />
                            Clip</button>
                    </div>
                </div>

                <div className="descriptioncontainer">
                    <div className="descriptionheader">
                        {
                            (SingleVideo?.statistics?.viewCount)?.length > 6
                                ? <p style={{ fontSize: '14px', fontWeight: '600' }}>{Number(SingleVideo?.statistics?.viewCount).toLocaleString()} M </p>
                                : <p style={{ fontSize: '14px', fontWeight: '600' }}>{Number(SingleVideo?.statistics?.viewCount).toLocaleString()} K </p>
                        }
                        <p style={{ fontSize: '14px', fontWeight: '600' }}>
                            {utcToTimeAgo(SingleVideo?.snippet?.publishedAt)}</p>

                        <p style={{ fontSize: '14px', fontWeight: '600', color: 'grey' }}>
                            #{SingleVideo?.snippet?.tags?.[0]} #{SingleVideo?.snippet?.tags?.[1]}</p>
                    </div>

                    <p>
                        {String(SingleVideo?.snippet?.description).slice(0, 600)}...

                    </p>
                </div>

            </div>

            <div className="singlepageright">
                <SingleVideocontainer />
            </div>


        </div>
    )
}

export default SingleVideoPage