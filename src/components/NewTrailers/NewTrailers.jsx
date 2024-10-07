import React from 'react';
import { useNavigate } from 'react-router-dom';
import lastkingdom from '../../assets/last-kingdom.jpg';
import spider from '../../assets/spider.jpeg';
import { FaPlay } from 'react-icons/fa'; 

const NewTrailers = () => {
    const navigate = useNavigate();

    const trailers = [
        {
            title: 'The Last Kingdom: Seven Kings Must Die',
            image: lastkingdom,
            description: 'A gripping continuation of the epic saga...',
            releaseDate: 'April 14, 2023',
            duration: '1 hr 51 min',
            videoUrl: "https://www.youtube.com/embed/J2uW5ehHqjc?si=mud4vzLHt_RdOTh0" // Replace with the correct video URL
        },
        {
            title: 'Spider-Man: Across the Spider-Verse',
            image: spider,
            description: 'Miles Morales catapults across the Multiverse...',
            releaseDate: 'June 2, 2023',
            duration: '2 hr 20 min',
            videoUrl: 'https://www.youtube.com/embed/some_video_id' // Replace with the correct video URL
        }
    ];

    const handlePlayTrailer = (trailer) => {
        navigate('/movie-detail', { state: { trailer } });
    };

    return (
        <div className="bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg p-6 rounded-3xl mt-0 shadow-lg text-white max-w-sm mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">New Trailers</h2>
                <div className="text-sm bg-red-600 rounded-xl px-2 py-1">2 new</div>
            </div>
            {trailers.map((trailer, index) => (
                <div key={index} className="relative mt-4">
                    <img
                        src={trailer.image}
                        alt={trailer.title}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent rounded-lg">
                        <h3 className="text-xl font-bold">{trailer.title}</h3>
                        <div className="text-sm mt-1">{trailer.releaseDate}</div>
                        <p className="text-sm mt-1">{trailer.description}</p>
                        <div className="text-sm mt-2 flex items-center text-gray-400">
                            <span className="material-icons-outlined text-gray-400 mr-1">timer</span>
                            {trailer.duration}
                        </div>
                    </div>
                    <button
                        className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full flex items-center justify-center"
                        onClick={() => handlePlayTrailer(trailer)}
                    >
                        <FaPlay className="text-lg" />
                    </button>
                    {index < trailers.length - 1 && <hr className="my-2 border-gray-600" />}
                </div>
            ))}
        </div>
    );
};

export default NewTrailers;
