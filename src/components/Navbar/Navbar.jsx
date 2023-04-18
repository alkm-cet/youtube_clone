import React from 'react';
import './Navbar.css';
//IMAGES
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png'

function Navbar() {
  return (
    <div className='Navbar'>

      <div className="logodiv">
        <span class="material-symbols-outlined">
          menu
        </span>
        <img src={logo} alt="" style={{ width: '90px' }} />
      </div>

      <div className="searchdiv">
        <input type="text" placeholder='Search' />
        <button>
          <span class="material-symbols-outlined">
            search
          </span>
        </button>
        <span className="material-symbols-outlined">
          mic
        </span>
      </div>

      <div className="infodiv">
        <span className="material-symbols-outlined">
          add_circle
        </span>
        <span className="material-symbols-outlined">
          notifications
        </span>
        <img src={avatar} alt="avatar" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
      </div>


    </div>
  )
}

export default Navbar