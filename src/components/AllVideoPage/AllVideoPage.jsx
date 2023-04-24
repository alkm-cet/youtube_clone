import React, { useState, useEffect } from 'react';
import './AllVideoPage.css'
import axios from 'axios';

function AllVideoPage() {

    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weeknd&key=AIzaSyAIUb_hRjq8uVb5Pv6k8Ls02j0qR3ws-bk'

    const url2 = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cid%2Cstatistics%2Cplayer%2CtopicDetails&chart=mostPopular&maxHeight=20&maxResults=20&regionCode=US&key=AIzaSyAIUb_hRjq8uVb5Pv6k8Ls02j0qR3ws-bk'


    const [video, setVideo] = useState({})

    useEffect(() => {
        try {
            axios.get(url2).then((response) => setVideo(response.data))
        } catch (err) {
            console.error(err)
        }

    }, [])

    console.log(video)


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
                    <div className="videodiv">
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

                        </div>


                    </div>
                )
            }


        </div>
    )
}

export default AllVideoPage