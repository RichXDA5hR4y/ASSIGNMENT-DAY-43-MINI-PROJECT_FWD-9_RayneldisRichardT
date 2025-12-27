// Menerima props 'movie'
const MovieCard = ({ movie }) => {
  // Logic warna rating (Hijau bagus, Kuning sedang, Merah jelek)
  const getRatingColor = (rating) => {
    if (rating >= 8) return 'green';
    if (rating >= 6) return 'orange';
    return 'red';
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button className="play-btn">▶ Play</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span className={`rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;