import React from 'react';
import './MainPageLeft.css'
import TopicBtns from '../TopicBtns/TopicBtns';
import AllVideoPage from '../AllVideoPage/AllVideoPage';
import SingleVideoPage from '../SingleVideoPage/SingleVideoPage';
//ROUTE
import { Routes, Route, Link } from 'react-router-dom';

function MainPageLeft() {
    return (
        <div className='MainPageLeft'>
            <TopicBtns />
            <Routes>
                <Route path='/' element={<AllVideoPage />} />
                <Route path='/SingleVideoPage/:id' element={<SingleVideoPage />} />
            </Routes>

        </div>
    )
}

export default MainPageLeft