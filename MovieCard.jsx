import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <img
        src={movie.poster}
        alt={movie.title}
      />

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p>⭐ {movie.rating}</p>

        <p>{movie.genre}</p>

        <Link to={`/movie/${movie.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default MovieCard;