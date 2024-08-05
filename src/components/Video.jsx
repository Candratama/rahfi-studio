import React from 'react';

function Video({ videoId }) {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&vq=hd1080&modestbranding=1&showinfo=0&rel=0`;

    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
                src={url}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Showreel"
            />
        </div>
    );
}

export default Video;

// https://youtu.be/46yXOSytDas