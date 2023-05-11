import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VideoContext = createContext();

function VideoContextProvider({ children }) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const handleSideBar = () => {
        setIsSideBarOpen(prev => !prev)
    }

    //----------------------------------- FETCHING DATAS

    const url2 = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cid%2Cstatistics%2Cplayer%2CtopicDetails&chart=mostPopular&maxHeight=20&maxResults=20&regionCode=US&key=AIzaSyAIUb_hRjq8uVb5Pv6k8Ls02j0qR3ws-bk'

    const [video, setVideo] = useState({})

    useEffect(() => {
        try {
            axios.get(url2).then((response) => setVideo(response.data))
        } catch (err) {
            console.error(err)
        }

    }, [])

    console.log(video)
    //-------------------------------------------------------VIDEO DATE FORMAT
    function formatDate(date) {
        const diff = Math.floor((new Date() - new Date(date)) / 1000); // zaman farkını saniye cinsinden hesapla

        if (diff < 60) {
            return `${diff} sec ago`; // 1 dakikadan azsa saniye cinsinden yazdır
        } else if (diff < 3600) {
            return `${Math.floor(diff / 60)} min ago`; // 1 saatten azsa dakika cinsinden yazdır
        } else if (diff < 86400) {
            return `${Math.floor(diff / 3600)} hours ago`; // 1 günden azsa saat cinsinden yazdır
        } else {
            return `${Math.floor(diff / 86400)} day ago`; // 1 günden fazlaysa gün cinsinden yazdır
        }
    }
    //-------------------------------------------------------VIDEO TIME FORMAT

    const handleVideoTime = (durationString) => {
        const regex = /PT(\d+)M(\d+)S/;
        const matches = durationString.match(regex);
        if (!matches) {
            return null;
        }
        const [fullMatch, minutes, seconds] = matches;
        const formattedMinutes = minutes.padStart(2, '0');
        const formattedSeconds = seconds.padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    // ------------------------------------------------------- NAVBAR COMPONENTS

    const [videoPopup, setVideoPopup] = useState(false);
    const [notificationsPopup, setNotificationsPopup] = useState(false);

    const handleVideoPopup = () => {
        setVideoPopup(prev => !prev)
        setNotificationsPopup(false)
    }

    const handleNotificationsPopup = () => {
        setNotificationsPopup(prev => !prev)
        setVideoPopup(false)
    }
    // ------------------------------------------------------- 

    return (
        <VideoContext.Provider
            value={{
                isSideBarOpen,
                formatDate,
                handleVideoTime,
                setIsSideBarOpen,
                handleSideBar,
                video,
                videoPopup,
                setVideoPopup,
                handleVideoPopup,
                notificationsPopup,
                setNotificationsPopup,
                handleNotificationsPopup,
            }}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoContextProvider