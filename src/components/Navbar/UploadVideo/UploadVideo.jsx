import React from 'react';
import './UploadVideo.css'
//IMAGES
import golive from '../../../images/golive.png';
import uploadvideo from '../../../images/uploadvideo.png'

function UploadVideo() {
    return (
        <div className='UploadVideo'>

            <div className="uploadvideodivs">
                <img src={uploadvideo} alt="" />
                <p>Upload Video</p>
            </div>

            <div className="uploadvideodivs">
                <img src={golive} alt="" />
                <p>Go Live</p>
            </div>

        </div>
    )
}

export default UploadVideo