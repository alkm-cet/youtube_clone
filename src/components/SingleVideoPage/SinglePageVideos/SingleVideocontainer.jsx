import React, { useContext } from 'react';
import './SingleVideocontainer.css';
//CONTEXT
import { VideoContext } from '../../context/VideoContext';
//ROUTER
import { Link } from 'react-router-dom';
//IMAGES
import time from '../../../images/time.png'
import playlist from '../../../images/playlist.png'

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

  const handleVideoTime = (durationString) => {
    const regex = /PT(\d+)M(\d+)S/;
    const matches = durationString.match(regex);
    if (!matches) {
      return null;
    }
    const [fullMatch, minutes, seconds] = matches;
    const formattedMinutes = minutes.padStart(2, '0');
    const formattedSeconds = seconds.padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <>

      {
        video?.items?.map((vid) =>
          <Link style={{ color: 'black', textDecoration: 'none' }} to={`/SingleVideoPage/${vid?.id}`}>
            <div className='SingleVideocontainer'>

              <div className="singlevideocontleft">
                <img className='videocontainerIMG' src={vid?.snippet?.thumbnails?.medium?.url} alt="" />
                <div className='videoTime'>{handleVideoTime(vid?.contentDetails?.duration)}</div>
                {/* <img className='timeIcon' src={time} alt="" /> */}
                <span class="material-symbols-outlined timeIcon">
                  schedule
                </span>
                {/* <img className='playlistIcon' src={playlist} alt="" /> */}
                <span class="material-symbols-outlined playlistIcon">
                  playlist_play
                </span>
              </div>

              <div className="singlevideocontright">

                <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} src={vid?.snippet?.thumbnails?.medium?.url} alt="" />

                <div className="singlevideocontrightIfo">
                  {
                    (vid?.snippet?.title).length > 70
                      ? <h5 style={{ fontSize: '14px' }}>{(vid?.snippet?.title).slice(0, 70)}</h5>
                      : <h5 style={{ fontSize: '14px' }}>{(vid?.snippet?.title)}</h5>
                  }

                  <div className="singlevideocontrightbottom">
                    {
                      (vid?.snippet?.channelTitle).length > 30
                        ? <p style={{ color: 'grey' }}>{(vid?.snippet?.channelTitle).slice(0, 30)}...</p>
                        : <p style={{ color: 'grey' }}>{vid?.snippet?.channelTitle}</p>
                    }
                    {
                      (vid?.statistics?.viewCount).length > 6
                        ? <p style={{ color: 'grey' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}M views - {formatDate(vid?.snippet?.publishedAt)} </p>
                        : <p style={{ color: 'grey' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}K views - {formatDate(vid?.snippet?.publishedAt)}</p>
                    }
                  </div>

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