import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return (
    <div>

      <header className="header">

        <div className="logo">
          🎬 Movie Explorer
        </div>

        <Link to="/">
          Home
        </Link>

      </header>

      <main className="details-page">

        <h1>Movie Details</h1>

        <div className="details-card">

          <h2>Movie Information</h2>

          <p>
            Movie ID: {id}
          </p>

          <p>
            ⭐ Rating: 8.5/10
          </p>

          <p>
            🎭 Genre: Action
          </p>

          <p>
            This is a sample movie description.
            Detailed movie information will be
            displayed here.
          </p>

        </div>

        <Link to="/">
          <button>
            ← Back to Movies
          </button>
        </Link>

      </main>

    </div>
  );
}

export default MovieDetails;