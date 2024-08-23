import React, {useEffect, useState} from 'react';

const WhatsappButton = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector('.floating-button-container');
            const heroSection = document.querySelector('.hero-section');
            const footer = document.querySelector('.footer-section');

            if (button && heroSection && footer) {
                const buttonRect = button.getBoundingClientRect();
                const heroRect = heroSection.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();

                const isOverHero = buttonRect.top < heroRect.bottom && buttonRect.bottom > heroRect.top;
                const isOverFooter = buttonRect.top < footerRect.bottom && buttonRect.bottom > footerRect.top;

                setIsHidden(isOverHero || isOverFooter);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`floating-button-container ${isHidden ? 'hidden' : ''}`}>
            <div className="bubble-chat">
                <p>Contact Us</p>
            </div>
            <button className="floating-button">
                <i className="fab fa-whatsapp"></i>
            </button>
        </div>
    );
};

export default WhatsappButton;