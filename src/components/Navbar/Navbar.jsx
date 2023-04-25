import React, { useContext } from 'react';
import './Navbar.css';
//IMAGES
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png'
//ROUTER
import { Link } from 'react-router-dom';
//CONTEXT
import { VideoContext } from '../context/VideoContext';


function Navbar() {

  const { handleSideBar  } = useContext(VideoContext);

  return (
    <div className='Navbar'>

      <div className="logodiv">
        <span class="material-symbols-outlined icons" onClick={handleSideBar}>
          menu
        </span>
        <Link to='/'><img src={logo} alt="" style={{ width: '90px', cursor: 'pointer' }} /></Link>
      </div>

      <div className="searchdiv">
        <div className="searchdivleft">
          <input type="text" placeholder='Search' style={{ fontSize: '16px' }} />
          <button>
            <span class="material-symbols-outlined">
              search
            </span>
          </button>
        </div>

        <span className="material-symbols-outlined icons">
          mic
        </span>
      </div>

      <div className="infodiv">
        <span className="material-symbols-outlined icons">
          add_circle
        </span>
        <span className="material-symbols-outlined icons">
          notifications
        </span>
        <img src={avatar} alt="avatar" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
      </div>


    </div>
  )
}

export default Navbar