import React from 'react';

const MovieCard = ({ image, title, description }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-white text-lg">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default MovieCard;
