import React from 'react';
import './MainPageLeft.css'
import TopicBtns from '../TopicBtns/TopicBtns';
import AllVideoPage from '../AllVideoPage/AllVideoPage';

function MainPageLeft() {
    return (
        <div className='MainPageLeft'>
            <TopicBtns />
            <AllVideoPage />
        </div>
    )
}

export default MainPageLeft