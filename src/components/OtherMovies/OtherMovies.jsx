import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './OtherMovies.css';
// Netflix movies
// Netflix movies
import netflix1 from '../../assets/venom.jpeg';
import netflix2 from '../../assets/the-meg.jpg';
import netflix3 from '../../assets/animal.jpeg';
import netflix4 from '../../assets/rampage.jpg';
import netflix5 from '../../assets/fitoor.jpeg';
import netflix6 from '../../assets/spider.jpg';
import netflix7 from '../../assets/you.jpeg';
import netflix8 from '../../assets/joker.jpeg';
// import venom from '../../assets/venom.mp4';
// Amazon movies
import amazon1 from '../../assets/amazon1.jpeg';
import amazon2 from '../../assets/amazon2.jpeg';
import amazon3 from '../../assets/amazon3.jpeg';
import amazon4 from '../../assets/amazon4.jpeg';
import amazon5 from '../../assets/amazon5.jpeg';
// Disney movies
import disney1 from '../../assets/disney1.jpeg';
import disney2 from '../../assets/disney2.jpeg';
import disney3 from '../../assets/disney3.jpeg';
import disney4 from '../../assets/disney4.jpeg';
import disney5 from '../../assets/disney5.jpeg';

// Category logos
import netflixLogo from '../../assets/netflix.png'; // Replace with actual path
import amazonLogo from '../../assets/primevideo.png'; // Replace with actual path
import disneyLogo from '../../assets/disney.png'; // Replace with actual path


const OtherMovies = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: netflixLogo,
            movies: [
                {
                    image: netflix1,
                    title: 'Venom',
                    description: 'A journalist acquires the powers of a symbiote.',
                    youtubeUrl: 'https://www.youtube.com/embed/u9Mv98Gr5pY',
                    backgroundImage: netflix1 // Use the image you want as the background
                },
                {
                    image: netflix2, title: 'The Meg', description: 'A giant prehistoric shark threatens the ocean.', youtubeUrl: 'https://www.youtube.com/embed/dG91B3hHyY4?si=WXwhWDuQhw23y9bP',
                    backgroundImage: netflix2
                },
                {
                    image: netflix3, title: 'Animal', description: 'A story about the conflict between humanity and nature.', youtubeUrl: "https://www.youtube.com/embed/Dydmpfo68DA?si=GdZvBBYU4MyklHV1&amp;controls=0",
                    backgroundImage: netflix3
                },
                {
                    image: netflix4, title: 'Rampage', description: 'A primatologist and his gorilla face monstrous threats.', youtubeUrl: "https://www.youtube.com/embed/coOKvrsmQiI?si=3s5sMLOMY9GRwVay&amp;controls=0",
                    backgroundImage: netflix4
                },
                {
                    image: netflix5, title: 'Fitoor', description: 'A romantic drama based on Charles Dickens\' novel.', youtubeUrl: "https://www.youtube.com/embed/Iqu_W5W4YO4?si=LKmk7aW6KXisBqAd&amp;controls=0",
                    backgroundImage: netflix5
                },
                {
                    image: netflix6, title: 'Spider Man', description: 'A romantic drama based on Charles Dickens\' novel.', youtubeUrl: "https://www.youtube.com/embed/nbp3Ra3Yp74?si=McCzxtob4drjOale",
                    backgroundImage: netflix6
                },
                {
                    image: netflix7, title: 'You', description: 'A romantic drama based on Charles Dickens\' novel.', youtubeUrl: "https://www.youtube.com/embed/xXBTImqyeU0?si=cAjhCHOzWbjh9yAh",
                    backgroundImage: netflix7
                },
                {
                    image: netflix8, title: 'Joker', description: 'A romantic drama based on Charles Dickens\' novel.', youtubeUrl: "https://www.youtube.com/embed/_OKAwz2MsJs?si=U1sf6kygx90MEA5g",
                    backgroundImage: netflix8
                },
            ]
        },
        {
            title: amazonLogo,
            movies: [
                { image: amazon1, title: 'Hunters', description: 'A diverse band of Nazi hunters in 1977 New York City.' },
                { image: amazon2, title: 'Gen V', description: 'A group of young superheroes navigating their powers.' },
                { image: amazon3, title: 'Wheel of Time', description: 'A group of women with magical powers fights dark forces.' },
                { image: amazon4, title: 'Carnival Row', description: 'A human detective and a fairy rekindle a dangerous affair.' },
                { image: amazon5, title: 'The Jungle Book', description: 'A boy raised by wolves in the jungle faces his fate.' },
            ]
        },
        {
            title: disneyLogo,
            movies: [
                { image: disney1, title: 'Pirates of the Caribbean', description: 'A swashbuckling adventure with Captain Jack Sparrow.' },
                { image: disney2, title: 'Jungle Cruise', description: 'A thrilling adventure down the Amazon river.' },
                { image: disney3, title: 'Frozen 2', description: 'Elsa and Anna embark on a new journey beyond Arendelle.' },
                { image: disney4, title: 'Beauty and the Beast', description: 'A young woman falls in love with a cursed prince.' },
                { image: disney5, title: 'Toy Story 4', description: 'Woody, Buzz, and the gang go on a new adventure.' },
            ]
        },
    ];
    const handleMovieClick = (movie) => {
        navigate('/movie-detail', { state: { movie } });
    };

    return (
        <div className="p-6 bg-black bg-opacity-75 rounded-3xl text-white mt-4">
            <h2 className="text-2xl font-bold">Other Movies</h2>
            <div className="mt-4 space-y-6">
                {categories.map((category, index) => (
                    <div key={index} className="mb-6">
                        <div className="flex items-center mb-4">
                            <h3 className="text-lg">{category.title}</h3>
                        </div>
                        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                            {category.movies.map((movie, movieIndex) => (
                                <div
                                    key={movieIndex}
                                    className="bg-black bg-opacity-75 rounded-3xl p-4 flex-shrink-0 w-48 cursor-pointer"
                                    onClick={() => handleMovieClick(movie)}
                                >
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="w-full h-60 rounded-lg object-cover"
                                    />
                                    <h4 className="mt-2 font-semibold text-white text-sm">{movie.title}</h4>
                                    <p className="text-xs text-gray-400 mt-1">{movie.description}</p>
                                    <div className="flex items-center mt-2">
                                        <FaPlay className="text-white mr-2" />
                                        <span className="text-xs text-white">Play</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherMovies;
