import React from 'react';
import Icon_calender from '../../resources/images/icons/calendar.png';
import Icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom'

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">

                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                        <div
                                            className="vn_icon"
                                            style={{
                                                background:`URL(${Icon_calender})`
                                            }}
                                        ></div>
                                        <div className="vn_title">Event Date & Time</div>
                                        <div className="vn_desc">7th August 2017 @10.00 pm</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                        <div
                                            className="vn_icon"
                                            style={{
                                                background:`URL(${Icon_location})`
                                            }}
                                        ></div>
                                        <div className="vn_title">Event Location</div>
                                        <div className="vn_desc">Maribu Club, San Fransico</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>

            </div>
        </div>
    );
};

export default VenueInfo;