import React, { useContext } from 'react';
import './AllVideoPage.css'
//ROUTER
import { Link } from 'react-router-dom';
// CONTEXT
import { VideoContext } from '../context/VideoContext';
//PAGES
import TopicBtns from '../TopicBtns/TopicBtns'
import Leftbar from '../Leftbar/Leftbar';

function AllVideoPage() {

    const { video,
        setIsSideBarOpen,
        formatDate,
        handleVideoTime,
    } = useContext(VideoContext);

    return (
        <div className='AllVideoPage'>
            <div className="allpageleft">
                <Leftbar />
            </div>

            <div className="allpageright">
                <TopicBtns />
                {
                    video?.items?.map(vid =>
                        <Link onClick={() => setIsSideBarOpen(false)} style={{ color: 'black', textDecoration: 'none' }} to={`/SingleVideoPage/${vid?.id}`}>
                            <div key={vid?.id} className="videodiv">
                                <div className="videodivtop">
                                    <img className='videoimg' src={vid?.snippet?.thumbnails?.high?.url} alt="" />
                                    <div className='videoTime'>{handleVideoTime(vid?.contentDetails?.duration)}</div>
                                </div>

                                <div className="videodivmid">
                                    <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} src={vid?.snippet?.thumbnails?.medium?.url} alt="" />

                                    <p style={{ fontWeight: '500' }}>{vid?.snippet?.title}</p>
                                </div>

                                <div className="videodivbottom">
                                    <p style={{ color: 'grey', fontSize: '14px' }}>{vid?.snippet?.channelTitle
                                    }</p>

                                    {
                                        (vid?.statistics?.viewCount).length > 6
                                            ? <p style={{ color: 'grey', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}M views <div style={{ width: '1px', height: '1px', border: '1px solid grey' }}></div> {formatDate(vid?.snippet?.publishedAt)} </p>
                                            : <p style={{ color: 'grey', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>{String(vid?.statistics?.viewCount).slice(0, 2)}K views <div style={{ width: '1px', height: '1px', border: '1px solid grey' }}></div>
                                                {formatDate(vid?.snippet?.publishedAt)}</p>
                                    }

                                    {/* <iframe src="https://www.youtube.com/embed/nV8UZJNBY6Y" allowfullscreen iframe/> */}



                                </div>


                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    )
}

export default AllVideoPage