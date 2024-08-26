'use client';

import React, {useEffect, useState} from 'react';
import Script from 'next/script';

const WhatsappButton = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector('.floating-button-container');
            const heroSection = document.querySelector('.hero-section');
            const footer = document.querySelector('footer');

            if (button && heroSection && footer) {
                const buttonRect = button.getBoundingClientRect();
                const heroRect = heroSection.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();

                const isOverHero = buttonRect.top < heroRect.bottom && buttonRect.bottom > heroRect.top;
                const isOverFooter = buttonRect.top < footerRect.bottom && buttonRect.bottom > footerRect.top;
                const isBeforeFooter = buttonRect.bottom > footerRect.top;

                setIsHidden(isOverHero || isOverFooter || isBeforeFooter);
            }

            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                button.style.display = "flex";
            } else {
                button.style.display = "none";
            }

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - footer.offsetHeight) {
                button.style.display = "none";
            }
        };

        const scrollFunction = () => {
            const mybutton = document.querySelector('.floating-button-container');
            const footer = document.querySelector('footer');
            const footerRect = footer.getBoundingClientRect();
            const buttonRect = mybutton.getBoundingClientRect();

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }

            if (buttonRect.bottom > footerRect.top || (window.innerHeight + window.scrollY) >= document.body.offsetHeight - footer.offsetHeight) {
                mybutton.style.display = "none";
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    return (
        <>
            {/*<Script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'/>*/}
            <div className={`floating-button-container mil-dark mil-back-to-top ${isHidden ? 'hidden' : ''}`}>
                <div className="bubble-chat">
                    <p>Contact Us</p>
                </div>
                <button className="floating-button">
                    <i className="fab fa-whatsapp"/>
                </button>
            </div>
        </>
    );
};

export default WhatsappButton;