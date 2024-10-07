import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RotatingCards.css';

// Importing images
import lupin from '../../assets/lupin.jpg';
import you from '../../assets/you.jpeg';
import joker from '../../assets/joker-up.jpeg';
import sevenKings from '../../assets/last-kingdom.jpg';
import spiderman from '../../assets/spider.jpg';
import netflix1 from '../../assets/against-ice.jpg';
import netflix2 from '../../assets/animal.jpeg';
import netflix3 from '../../assets/extraction.jpg';

const cardsData = [
    { id: 1, title: 'Lupin', image: lupin, description: 'A thrilling heist series.', youtubeUrl: 'https://www.youtube.com/embed/ga0iTWXCGa0?si=9htW7VeofurH_QXs' },
    { id: 2, title: 'You', image: you, description: 'A psychological thriller.' },
    { id: 3, title: 'Joker', image: joker, description: 'The story of the infamous villain.' },
    { id: 4, title: 'Seven Kings Must Die', image: sevenKings, description: 'Historical drama set in medieval times.' },
    { id: 5, title: 'Spiderman', image: spiderman, description: 'The adventures of a superhero.' },
    { id: 6, title: 'Against Ice', image: netflix1, description: 'A survival story against the elements.' },
    { id: 7, title: 'Animal', image: netflix2, description: 'A drama about wild creatures.' },
    { id: 8, title: 'Extraction', image: netflix3, description: 'A high-octane action film.' },
];

const RotatingCards = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Start with the first card active
    const [backgroundImage, setBackgroundImage] = useState(cardsData[0].image); // Initialize with the first card's image
    const navigate = useNavigate();

    const handleCardClick = (index) => {
        setActiveIndex(index);
        setBackgroundImage(cardsData[index].image); // Update background image based on active card
    };

    const handleCardDoubleClick = (card) => {
        navigate('/movie-detail', { state: { movie: card } });
    };

    const calculatePosition = (index) => {
        const totalCards = cardsData.length;
        const angle = (360 / totalCards) * (index - activeIndex); // Calculate the angle for each card
        const x = 200 * Math.sin((angle * Math.PI) / 180); // X position based on angle
        const z = 200 * Math.cos((angle * Math.PI) / 180); // Z position for depth
        return { x, z };
    };

    return (
        <div
            className="flex justify-center items-center h-screen bg-gray-200 relative"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Black overlay with 75% opacity */}
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative w-full h-full flex justify-center items-center">
                {cardsData.map((card, index) => {
                    const { x, z } = calculatePosition(index);
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={card.id}
                            className={`absolute card cursor-pointer ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${x}px) translateZ(${z}px)`,
                                zIndex: isActive ? 100 : 50,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                            onClick={() => handleCardClick(index)}
                            onDoubleClick={() => handleCardDoubleClick(card)}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="rounded-lg shadow-lg w-40 h-60"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RotatingCards;
