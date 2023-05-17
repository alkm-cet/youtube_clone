import React from 'react';
import './MainPageLeft.css'
//PAGES
import AllVideoPage from '../AllVideoPage/AllVideoPage';
import SingleVideoPage from '../SingleVideoPage/SingleVideoPage';
//ROUTE
import { Routes, Route, Link } from 'react-router-dom';
import SearchedVideosPage from '../SearchedVideosPage/SearchedVideosPage';


function MainPageLeft() {
    return (
        <div className='MainPageLeft'>
            <Routes>
                <Route path='/' element={<AllVideoPage />} />
                <Route path='/SingleVideoPage/:id' element={<SingleVideoPage />} />
                <Route path='/SearchedVideosPage' element={<SearchedVideosPage />} />
            </Routes>

        </div>
    )
}

export default MainPageLeft