import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const movies = [
    {
      id: 1,
      title: "Inception",
      rating: 8.8,
      genre: "Action",
      poster: "https://via.placeholder.com/300x450?text=Inception"
    },
    {
      id: 2,
      title: "The Dark Knight",
      rating: 9.0,
      genre: "Action",
      poster: "https://via.placeholder.com/300x450?text=Dark+Knight"
    },
    {
      id: 3,
      title: "Interstellar",
      rating: 8.7,
      genre: "Drama",
      poster: "https://via.placeholder.com/300x450?text=Interstellar"
    },
    {
      id: 4,
      title: "The Hangover",
      rating: 7.7,
      genre: "Comedy",
      poster: "https://via.placeholder.com/300x450?text=Hangover"
    }
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || movie.genre === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <h1>Discover Your Next Movie</h1>

          <p>
            Search and explore your favorite movies
          </p>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </section>

        <section className="categories">

          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Action")}>
            Action
          </button>

          <button onClick={() => setCategory("Comedy")}>
            Comedy
          </button>

          <button onClick={() => setCategory("Drama")}>
            Drama
          </button>

        </section>

        <section className="movies-section">

          <h2>Popular Movies</h2>

          <div className="movie-grid">

            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))
            ) : (
              <p className="error">
                No movies found.
              </p>
            )}

          </div>

        </section>
      </main>
    </>
  );
}

export default Home;