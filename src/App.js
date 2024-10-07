import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import OtherMovies from './components/OtherMovies/OtherMovies';
import MovieDetail from './components/MovieDetail/MovieDetail';
import RotatingCards from './components/RotatingCards/RotatingCards'; 
import SeriesRotatingCards from './components/SeriesRotatingCards/SeriesRotatingCards';
import AnimationRotatingCards from './components/AnimationRotatingCards/AnimationRotatingCards';
import VideoPlayer from './components/OtherMovies/VideoPlayer';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<RotatingCards />} />
          <Route path="/series" element={<SeriesRotatingCards />} />
          <Route path="/animations" element={<AnimationRotatingCards />} />
          <Route path="/other-movies" element={<OtherMovies />} />
          <Route path="/movie-detail" element={<MovieDetail />} /> {/* Ensure this route matches with RotatingCards navigation */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
