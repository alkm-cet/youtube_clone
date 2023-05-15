import React, { useContext } from 'react';
import './MainPage.css'
import Leftbar from '../Leftbar/Leftbar';
import MainPageLeft from '../MainPageLeft/MainPageLeft';

function MainPage() {

    return (
        <div className='MainPage'>
            {/* <Leftbar /> */}
            <MainPageLeft />
        </div>
    )
}

export default MainPage