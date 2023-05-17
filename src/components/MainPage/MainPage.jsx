import React, { useContext } from 'react';
import './MainPage.css'
//PAGES
import MainPageLeft from '../MainPageLeft/MainPageLeft';

function MainPage() {

    return (
        <div className='MainPage'>
            <MainPageLeft />
        </div>
    )
}

export default MainPage