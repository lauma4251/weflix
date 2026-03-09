import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ movieId }) => {
    const [active, setActive] = useState(false);

    useEffect(() => { setActive(false); }, [movieId]);

    if (!movieId) return null;

    const iframeSrc = `https://vidcore.net/movie/${movieId}?autoplay=true&muted=false&chromecast=false&nextButton=false`;

    return (
        <div className="relative w-full h-full">
            <iframe
                src={iframeSrc}
                title={`TV Show: ${tvId} - S${season}E${episode}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
            />
        </div>
    );
};


VideoPlayer.propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
};

export default memo(VideoPlayer);