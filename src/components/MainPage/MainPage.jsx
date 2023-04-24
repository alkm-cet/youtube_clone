import React from 'react';
import './MainPage.css'
import Leftbar from '../Leftbar/Leftbar';
import MainPageLeft from '../MainPageLeft/MainPageLeft';

function MainPage({isSideBarOpen,}) {
    return (
        <div className='MainPage'>
            <Leftbar isSideBarOpen={isSideBarOpen} />
            <MainPageLeft/>
        </div>
    )
}

export default MainPage