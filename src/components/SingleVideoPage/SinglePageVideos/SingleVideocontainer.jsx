import React, { useContext } from 'react';
import './SingleVideocontainer.css';
//CONTEXT
import { VideoContext } from '../../context/VideoContext';
//ROUTER
import { Link } from 'react-router-dom';

function SingleVideo() {

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
    <>

      {
        video?.items?.map((vid) =>
          <Link style={{ color: 'black', textDecoration: 'none' }} to={`/SingleVideoPage/${vid?.id}`}>
            <div className='SingleVideocontainer'>

              <div className="singlevideocontleft">
                <img className='videocontainerIMG' src={vid?.snippet?.thumbnails?.medium?.url} alt="" />
              </div>

              <div className="singlevideocontright">

                {
                  (vid?.snippet?.title).length > 60
                    ? <h5 style={{ fontSize: '14px' }}>{(vid?.snippet?.title).slice(0, 60)}...</h5>
                    : <h5 style={{ fontSize: '14px' }}>{(vid?.snippet?.title)}</h5>
                }


                <div className="singlevideocontrightbottom">
                  <p style={{ color: 'grey', fontSize: '14px' }}>{vid?.snippet?.channelTitle}</p>
                  {
                    (vid?.statistics?.viewCount).length > 6
                      ? <p style={{ color: 'grey', fontSize: '14px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}M views - {formatDate(vid?.snippet?.publishedAt)} </p>
                      : <p style={{ color: 'grey', fontSize: '14px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}K views - {formatDate(vid?.snippet?.publishedAt)}</p>
                  }
                </div>

              </div>

            </div >
          </Link>
        )
      }

    </>

  )
}

export default SingleVideo