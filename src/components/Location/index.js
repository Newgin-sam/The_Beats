import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.107899822488!2d77.06349514811933!3d8.324946750803793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a91bff30d3dd%3A0x611b7c7535119baa!2sCSI%20Nakapuram!5e0!3m2!1sen!2sin!4v1620929444941!5m2!1sen!2sin" 
                width="100%" 
                height="500px" 
                allowFullScreen 
                loading="lazy">
            </iframe>

            <div className="location_tag">
                <div className=''>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;