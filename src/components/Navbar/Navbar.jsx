import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png'; // Update with the correct path to your profile image

const Navbar = () => {
    return (
        <nav className="backdrop-filter backdrop-blur-lg -webkit-backdrop-filter blur-md rounded-full mx-2 mt-2 flex justify-between items-center p-4">
            {/* Search Bar on the Left */}
            <div className="flex items-center flex-1">
                <input
                    type="text"
                    placeholder="Search movies"
                    className="bg-gray-300 backdrop-blur-md text-black placeholder-gray-700 px-4 py-2 rounded-full focus:outline-none w-64"
                />
            </div>

            {/* Centered Navigation Links */}
            <div className="flex-1 flex justify-center space-x-5">
            <Link to="/"><button className="bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg text-white px-4 py-2 rounded-full hover:text-black hover:bg-gray-200 transition">Dashboard</button></Link>
                <Link to="/movies"><button className="text-black hover:bg-gray-200 px-4 py-2 rounded-full transition">Movies</button></Link>
                <Link to="/series"><button className="text-black hover:bg-gray-200 px-4 py-2 rounded-full transition">Series</button></Link>
                <Link to="/animations"><button className="text-black hover:bg-gray-200 px-4 py-2 rounded-full transition">Animations</button></Link>
                <button className="text-black hover:bg-gray-200 px-4 py-2 rounded-full transition">Shows</button>
            </div>

            {/* Bell Icon and Profile Image on the Right */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
                <button className="text-black bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg p-2 rounded-full hover:bg-gray-200 transition">🔔</button>
                <div className="flex items-center space-x-2">
                    <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
