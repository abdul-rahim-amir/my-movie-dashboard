import React from 'react';
import NewTrailers from '../NewTrailers/NewTrailers';
import FeatureMovie from '../FeaturedMovies/FeaturedMovies'; // Adjust the path as necessary
import ContinueWatching from '../ContinueWatching/ContinueWatching'; // Adjust the path as necessary
import OtherMovies from '../OtherMovies/OtherMovies'; // Adjust the path as necessary

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-900/70 backdrop-blur-lg text-white min-h-screen">
            {/* First Row: New Trailers and Feature Movie */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1 md:col-span-1">
                    <NewTrailers />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <FeatureMovie />
                </div>
            </div>
            {/* Second Row: Continue Watching */}
            <div className="mt-2 grid grid-cols-1">
                <div className="col-span-1">
                    <ContinueWatching />
                </div>
            </div>
            {/* Third Row: Other Movies Section */}
            <div className="mt-5">
                <OtherMovies />
            </div>
        </div>
    );
};

export default Dashboard;
