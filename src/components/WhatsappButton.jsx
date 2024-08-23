'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const WhatsappButton = () => {
  useEffect(() => {
    const wa_btnSetting = {
      "btnColor": "#16BE45",
      "ctaText": "WhatsApp Us",
      "cornerRadius": 40,
      "marginBottom": 20,
      "marginLeft": 20,
      "marginRight": 20,
      "btnPosition": "right",
      "whatsAppNumber": "6289626677400",
      "welcomeMessage": "Halo Rahfi Studio...",
      "zIndex": 999999,
      "btnColorScheme": "light"
    };
    window.onload = () => {
      _waEmbed(wa_btnSetting);
    };
  }, []);

  return (
    <>
      <Script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js' />
    </>
  );
};

export default WhatsappButton;