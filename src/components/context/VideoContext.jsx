import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VideoContext = createContext();

function VideoContextProvider({ children }) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const handleSideBar = () => {
        setIsSideBarOpen(prev => !prev)
    }

    //----------------------------------- FETCHİNG DATAS

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

    // -------------------------------------------------------


    return (
        <VideoContext.Provider
            value={{
                isSideBarOpen,
                setIsSideBarOpen,
                handleSideBar,
                video,
            }}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoContextProvider