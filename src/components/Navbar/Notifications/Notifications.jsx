import React, { useContext } from 'react';
import './Notifications.css';
//IMAGES
import settings from '../../../images/settings.png'
//CONTEXT
import { VideoContext } from '../../context/VideoContext';
//ROUTER
import { Link } from 'react-router-dom';

function Notifications() {

    const {
        video,
        formatDate,
        setIsSideBarOpen } = useContext(VideoContext)

    return (
        <div className='Notifications'>
            <div className="notificationsHeader">
                <p>Notifications</p>
                <img src={settings} alt="" />
            </div>

            {
                video?.items?.map((item) =>
                    <Link onClick={() => setIsSideBarOpen(false)} style={{ color: 'black', textDecoration: 'none' }} to={`/SingleVideoPage/${item?.id}`}>
                        <div className='notificationItemContainer' key={item?.id}>
                            <img style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                            <p>
                                {item?.snippet?.channelTitle} uploaded: {item?.snippet?.title}
                                <span>{formatDate(item?.snippet?.publishedAt)}</span>
                            </p>
                            <img className="notificationsVideoIMG" src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default Notifications