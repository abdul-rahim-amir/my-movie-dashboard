import React, { useState } from 'react';
import '../RotatingCards/RotatingCards.css';

// Importing series images
import series1 from '../../assets/series1.jpeg';
import series2 from '../../assets/series2.jpeg';
import series3 from '../../assets/series3.jpeg';
import series4 from '../../assets/series4.jpeg';
import series5 from '../../assets/series5.jpeg';

const seriesData = [
    { id: 1, title: 'Breaking Bad', image: series1 },
    { id: 2, title: 'Game of Thrones', image: series2 },
    { id: 3, title: 'Stranger Things', image: series3 },
    { id: 4, title: 'Dark', image: series4 },
    { id: 5, title: 'Westworld', image: series5 },
];

const SeriesRotatingCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const calculatePosition = (index) => {
        const totalCards = seriesData.length;
        const angle = (360 / totalCards) * (index - activeIndex);
        const x = 200 * Math.sin((angle * Math.PI) / 180);
        const z = 200 * Math.cos((angle * Math.PI) / 180);
        return { x, z };
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="relative w-full h-full flex justify-center items-center">
                {seriesData.map((series, index) => {
                    const { x, z } = calculatePosition(index);
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={series.id}
                            className={`absolute card cursor-pointer ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${x}px) translateZ(${z}px)`,
                                zIndex: isActive ? 100 : 50,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={series.image}
                                alt={series.title}
                                className="rounded-lg shadow-lg w-40 h-60"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SeriesRotatingCards;
