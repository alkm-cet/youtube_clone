import React, { useContext, useState } from 'react';
import './Navbar.css';
//IMAGES
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png'
//ROUTER
import { Link, useNavigate } from 'react-router-dom';
//CONTEXT
import { VideoContext } from '../context/VideoContext';
//COMPONENTS
import UploadVideo from './UploadVideo/UploadVideo';
import Notifications from './Notifications/Notifications';


function Navbar() {

  const {
    handleSideBar,
    videoPopup,
    setVideoPopup,
    handleVideoPopup,
    notificationsPopup,
    setNotificationsPopup,
    handleNotificationsPopup,
    setIsSideBarOpen,
    handleSearchWord,
    seacrhWord,
    searchVideos,
    searchedVideo,
  } = useContext(VideoContext);

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchVideos();
      e.preventDefault();
      navigate('/SearchedVideosPage');
    }
  };

  console.log(seacrhWord)
  console.log(searchedVideo)

  return (

    <div className='Navbar'>

      <div className="logodiv b">
        <span className="material-symbols-outlined icons" onClick={handleSideBar}>
          menu
        </span>
        <Link onClick={() => setIsSideBarOpen(true)} to='/'><img src={logo} alt="" style={{ width: '90px', cursor: 'pointer' }} /></Link>
      </div>

      <div className="searchdiv">
        <div className="searchdivleft">
          <input onKeyDown={handleKeyDown} onChange={handleSearchWord} type="text" placeholder='Search' style={{ fontSize: '16px' }} />
          <Link to='/SearchedVideosPage'>
            <button className='searchBTN'>
              <span class="material-symbols-outlined">
                search
              </span>
            </button>
          </Link>
        </div>

        <span className="material-symbols-outlined icons">
          mic
        </span>
      </div>

      <div className="infodiv">
        <span class="material-symbols-outlined mobilSearch">
          search
        </span>
        <span onClick={handleVideoPopup} className="material-symbols-outlined icons">
          add_circle
          {
            videoPopup ? <UploadVideo /> : null
          }
        </span>
        <span onClick={handleNotificationsPopup} className="material-symbols-outlined icons">
          notifications
          {
            notificationsPopup ? <Notifications /> : null
          }
        </span>
        <img src={avatar} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      </div>


    </div>
  )
}

export default Navbar