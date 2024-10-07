import React from 'react';
import { FaPlay } from 'react-icons/fa';
import movie1 from '../../assets/lupin.jpg';
import movie2 from '../../assets/you.jpeg';
import movie3 from '../../assets/stranger-things.jpg';
import movie4 from '../../assets/money-heist.jpg';
import movie5 from '../../assets/the-witcher.jpeg';
import movie6 from '../../assets/against-ice.jpg';

const ContinueWatching = () => {
    const movies = [
        {
            image: movie1,
            title: 'Lupin: Chapter 3',
            episode: 'Episode 4',
        },
        {
            image: movie2,
            title: 'You: Season 2',
            episode: 'Episode 6',
        },
        {
            image: movie3,
            title: 'Stranger Things',
            episode: 'Season 3, Episode 2',
        },
        {
            image: movie4,
            title: 'La Casa de Papel',
            episode: 'Season 5, Episode 7',
        },
        {
            image: movie5,
            title: 'The Witcher',
            episode: 'Season 2, Episode 1',
        },
        {
            image: movie6,
            title: 'Against Ice',
            episode: '1h 15m',
        }
    ];

    return (
        <div className="bg-black bg-opacity-75 p-6 rounded-3xl mt-4 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Continue Watching</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {movies.map((movie, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-sm font-bold">{movie.title}</h3>
                            <p className="text-xs text-gray-400">{movie.episode}</p>
                        </div>
                        <button className="bg-white text-black p-1 rounded-full flex items-center justify-center w-8 h-8">
                            <FaPlay className="text-sm" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContinueWatching;
