import React, { useContext } from 'react';
import './AllVideoPage.css'
import axios from 'axios';
//ROUTER
import { Link } from 'react-router-dom';
// CONTEXT
import { VideoContext } from '../context/VideoContext';

function AllVideoPage() {

    const { video } = useContext(VideoContext);

    function formatDate(date) {
        const diff = Math.floor((new Date() - new Date(date)) / 1000); // zaman farkını saniye cinsinden hesapla

        if (diff < 60) {
            return `${diff} sec ago`; // 1 dakikadan azsa saniye cinsinden yazdır
        } else if (diff < 3600) {
            return `${Math.floor(diff / 60)} min ago`; // 1 saatten azsa dakika cinsinden yazdır
        } else if (diff < 86400) {
            return `${Math.floor(diff / 3600)} hours ago`; // 1 günden azsa saat cinsinden yazdır
        } else {
            return `${Math.floor(diff / 86400)} day ago`; // 1 günden fazlaysa gün cinsinden yazdır
        }
    }

    return (
        <div className='AllVideoPage'>

            {
                video?.items?.map(vid =>
                    <Link style={{color:'black',textDecoration:'none'}} to={`/SingleVideoPage/${vid?.id}`}>
                        <div key={vid?.id} className="videodiv">
                            <div className="videodivtop">
                                <img className='videoimg' src={vid?.snippet?.thumbnails?.high?.url} alt="" />
                            </div>

                            <div className="videodivmid">
                                <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={vid?.snippet?.thumbnails?.medium?.url} alt="" />

                                <p style={{ fontWeight: '500' }}>{vid?.snippet?.title}</p>
                            </div>

                            <div className="videodivbottom">
                                <p style={{ color: 'grey', fontSize: '14px' }}>{vid?.snippet?.channelTitle
                                }</p>


                                {
                                    (vid?.statistics?.viewCount).length > 6
                                        ? <p style={{ color: 'grey', fontSize: '14px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}M views - {formatDate(vid?.snippet?.publishedAt)} </p>
                                        : <p style={{ color: 'grey', fontSize: '14px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}K views -
                                            {formatDate(vid?.snippet?.publishedAt)}</p>
                                }

                                {/* <iframe src="https://www.youtube.com/embed/nV8UZJNBY6Y" allowfullscreen iframe/> */}



                            </div>


                        </div>
                    </Link>
                )
            }


        </div>
    )
}

export default AllVideoPage