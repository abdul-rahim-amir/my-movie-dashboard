import React, { useState } from 'react';
import '../RotatingCards/RotatingCards.css';

// Importing animation images
import animation1 from '../../assets/disney4.jpeg';
import animation2 from '../../assets/disney2.jpeg';
import animation3 from '../../assets/disney3.jpeg';
import animation4 from '../../assets/animation3.jpeg';
import animation5 from '../../assets/animation5.jpeg';

const animationsData = [
    { id: 1, title: 'Toy Story', image: animation1 },
    { id: 2, title: 'The Lion King', image: animation2 },
    { id: 3, title: 'Frozen', image: animation3 },
    { id: 4, title: 'Shrek', image: animation4 },
    { id: 5, title: 'The Incredibles', image: animation5 },
];

const AnimationRotatingCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const calculatePosition = (index) => {
        const totalCards = animationsData.length;
        const angle = (360 / totalCards) * (index - activeIndex);
        const x = 200 * Math.sin((angle * Math.PI) / 180);
        const z = 200 * Math.cos((angle * Math.PI) / 180);
        return { x, z };
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="relative w-full h-full flex justify-center items-center">
                {animationsData.map((animation, index) => {
                    const { x, z } = calculatePosition(index);
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={animation.id}
                            className={`absolute card cursor-pointer ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${x}px) translateZ(${z}px)`,
                                zIndex: isActive ? 100 : 50,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={animation.image}
                                alt={animation.title}
                                className="rounded-lg shadow-lg w-40 h-60"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimationRotatingCards;
