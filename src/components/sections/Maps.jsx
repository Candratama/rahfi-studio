import React from 'react'

function Maps() {
    return (
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.655553722451!2d110.47605517521573!3d-7.0497000690806075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d09d28cba71%3A0x37d69dc706c47036!2sRahfi%20Studio!5e0!3m2!1sen!2sid!4v1722864597466!5m2!1sen!2sid"
                    style={{"border": "0", filter: "grayscale(80%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}

export default Maps


