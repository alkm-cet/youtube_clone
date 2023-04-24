import React from 'react';
import './Leftbar.css';
//IMAGES
import homeicon from '../../images/homeicon.png'
import shortsicon from '../../images/shortsicon.png'
import subscriptionicon from '../../images/subscriptionicon.png'
import bookcaseicon from '../../images/bookcaseicon.png'
import clockicon from '../../images/clockicon.png'
import videoicon from '../../images/videoicon.png'
import historyicon from '../../images/historyicon.png'
import likeicon from '../../images/likeicon.png'
import downarrowicon from '../../images/downarrowicon.png'
import subs1 from '../../images/subs1.png'
import subs2 from '../../images/subs2.png'
import subs3 from '../../images/subs3.png'
import trending from '../../images/trending.png'
import music from '../../images/music.png'
import live from '../../images/live.png'
import gaming from '../../images/gaming.png'
import sports from '../../images/sports.png'

import premium from '../../images/premium.png'
import studio from '../../images/studio.png'
import YTmusic from '../../images/YTmusic.png'
import kids from '../../images/kids.png'

function Leftbar({ isSideBarOpen }) {
    return (
        <>
            {
                isSideBarOpen
                    ? <div className='Leftbar'>

                        <section className='section1'>
                            <div className="sectionBTN">
                                <img src={homeicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Home</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={shortsicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Shorts</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={subscriptionicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Subscriptions</p>
                            </div>
                        </section>

                        <section className='section2'>
                            <div className="sectionBTN">
                                <img src={bookcaseicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Library</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={clockicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>History</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={videoicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Your videos</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={historyicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Watch later</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={likeicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Liked videos</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={downarrowicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Show more</p>
                            </div>
                        </section>

                        <section className='section3'>
                            <h4 style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', fontWeight: '500' }}>Subscriptions</h4>
                            <div className="sectionBTN">

                                <img src={subs1} alt="" style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
                                <p style={{ fontSize: '14px' }}>Lorem Ipsum</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={subs2} alt="" style={{ width: '25px', borderRadius: '50%' }} />
                                <p style={{ fontSize: '14px' }}>Dolor Sit Amed</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={subs3} alt="" style={{ width: '25px', borderRadius: '50%' }} />
                                <p style={{ fontSize: '14px' }}>Lorem </p>
                            </div>
                            <div className="sectionBTN">
                                <img src={downarrowicon} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Show 97 more</p>
                            </div>
                        </section>

                        <section className='section4'>
                            <h4 style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', fontWeight: '500' }}>Explore</h4>
                            <div className="sectionBTN">

                                <img src={trending} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Trending</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={music} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Music</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={live} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Live </p>
                            </div>
                            <div className="sectionBTN">
                                <img src={gaming} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Gaming</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={sports} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>Sports</p>
                            </div>
                        </section>

                        <section className='section5'>
                            <h4 style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', fontWeight: '500' }}>More from YouTube</h4>
                            <div className="sectionBTN">

                                <img src={premium} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>YouTube Premium</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={studio} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>YouTube Studio</p>
                            </div>
                            <div className="sectionBTN">
                                <img src={YTmusic} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>YouTube Music </p>
                            </div>
                            <div className="sectionBTN">
                                <img src={kids} alt="" style={{ width: '25px' }} />
                                <p style={{ fontSize: '14px' }}>YouTube Kids</p>
                            </div>
                        </section>

                    </div>
                    : null
            }
        </>

    )
}

export default Leftbar