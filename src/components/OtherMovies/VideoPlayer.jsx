import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const VideoPlayer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie } = location.state || {};

    if (!movie) {
        return <div>No movie selected</div>;
    }

    return (
        <div 
            className="relative min-h-screen flex flex-col items-center justify-center" 
            style={{ 
                backgroundImage: `url(${movie.backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}
        >
            {/* Black overlay with 75% opacity */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-white bg-opacity-50 text-black p-2 rounded-full flex items-center justify-center z-10"
            >
                <FaArrowLeft className="text-lg" />
            </button>

            <div className="relative w-full max-w-4xl p-4 z-10">
                <iframe
                    className="w-full h-64 md:h-96 rounded-lg"
                    src={movie.youtubeUrl}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <h2 className="text-xl md:text-2xl font-bold text-white mt-4">{movie.title}</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">{movie.description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
