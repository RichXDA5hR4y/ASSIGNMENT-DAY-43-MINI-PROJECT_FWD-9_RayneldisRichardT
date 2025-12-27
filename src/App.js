import React from 'react';
import './App.css'; // Import CSS
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import moviesData from './data/movies'; // Import Data Dummy

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <h2 className="section-title">Trending Now</h2>
        <div className="movie-grid">
          {/* Mapping Data: Mengubah Array Data menjadi Component */}
          {moviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;