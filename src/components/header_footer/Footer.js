import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                The Venue    
                </div>
                <div className="footer_copyright">
                    The Venue 2021. All rights reserved
                </div>
            </Fade>            
        </div>
    );
};

export default Footer;