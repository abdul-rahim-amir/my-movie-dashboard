import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moneyheist from '../../assets/money-heist.jpg';
import strangerthings from '../../assets/stranger-things.jpg';
import thewitcher from '../../assets/the-witcher.jpeg';
import { FaPlay, FaArrowLeft, FaArrowRight, FaFire } from 'react-icons/fa';

const FeatureMovie = () => {
    const movies = [
        {
            image: moneyheist,
            title: 'La Casa de Papel',
            description: 'A thrilling heist with high stakes and unexpected twists.',
            extraText: 'This Spanish series has gained worldwide popularity for its gripping storyline and complex characters.',
            genres: ['Action', 'Crime', 'Drama'],
            youtubeUrl: "https://www.youtube.com/embed/_InqQJRqGW4?si=YsZX7tq_PoXw-mm6",
            backgroundImage: moneyheist,
        },
        {
            image: strangerthings,
            title: 'Stranger Things',
            description: 'A group of kids uncovering the mysteries of the Upside Down.',
            extraText: 'Set in the 1980s, this series blends supernatural elements with nostalgic references and strong character development.',
            genres: ['Sci-Fi', 'Horror', 'Mystery'],
            youtubeUrl: "https://www.youtube.com/embed/b9EkMc79ZSU?si=7Z4kG89-pHicRzG7", // Replace with actual URL
            backgroundImage: strangerthings,
        },
        {
            image: thewitcher,
            title: 'The Witcher',
            description: 'Geralt of Rivia battles monsters and navigates a complex world.',
            extraText: 'Based on the popular book series, it combines dark fantasy with intricate storytelling and rich world-building.',
            genres: ['Fantasy', 'Adventure', 'Action'],
            youtubeUrl: "https://www.youtube.com/embed/ndl1W4ltcmg?si=u0upKksVXQexUQ8y", // Replace with actual URL
            backgroundImage: thewitcher,
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Move to next image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, ); // Empty dependency array ensures this runs only once when the component mounts

    const handleWatchTrailer = () => {
        navigate('/movie-detail', { state: { movie: movies[currentIndex] } });
    };

    return (
        <div className="relative rounded-3xl overflow-hidden h-[60vh]">
            <img
                src={movies[currentIndex].image}
                alt={movies[currentIndex].title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-6 bg-black bg-opacity-50">
                <button
                    className="absolute top-4 left-4 bg-white text-black flex items-center px-2 py-1 text-xs rounded-full bg-opacity-75"
                >
                    <FaFire className="mr-1 text-sm" />
                    Top Trending
                </button>

                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {movies[currentIndex].genres.map((genre, index) => (
                            <button
                                key={index}
                                className="bg-white text-white bg-opacity-25 px-2 py-1 rounded-full text-xs"
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{movies[currentIndex].title}</h2>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">{movies[currentIndex].description}</p>
                    <p className="text-gray-300 mt-2 text-xs md:text-sm w-full md:w-1/2">{movies[currentIndex].extraText}</p>
                    <button
                        onClick={handleWatchTrailer}
                        className="mt-4 bg-white text-black flex items-center px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                        <FaPlay className="mr-1 text-sm md:text-base" />
                        Watch Trailer
                    </button>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                        onClick={prevImage}
                        className="bg-white bg-opacity-50 text-black p-2 rounded-full flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-lg" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="bg-white bg-opacity-50 text-black p-2 rounded-full flex items-center justify-center"
                    >
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureMovie;
