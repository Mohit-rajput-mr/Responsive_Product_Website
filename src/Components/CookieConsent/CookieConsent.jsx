
import React, { useState } from 'react';
import './CookieConsent.css'; 

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true); 

    const handleAccept = () => {
        setIsVisible(false); 
    };

    const handleDecline = () => {
        setIsVisible(false); 
    };

    if (!isVisible) return null; 

    return (
        <div className="cookie-consent">
            <p>
                We use cookies to improve your experience. By continuing, you agree to our
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
            </p>
            <div className="cookie-buttons">
                <button onClick={handleAccept} className="accept-btn">Accept All</button>
                <button onClick={handleDecline} className="decline-btn">Decline</button>
            </div>
        </div>
    );
};

export default CookieConsent;
