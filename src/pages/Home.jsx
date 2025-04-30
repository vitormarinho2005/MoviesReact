import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Carousel from '../components/Carousel';  // Novo componente
import Navbar from '../components/Navbar';      // Novo componente
import Footer from '../components/Footer';      // Novo componente
import './Home.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'a90fff95fa96502bf022728c9702c896';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        setError('Erro ao carregar filmes.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <Navbar />
      <Carousel movies={movies} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}
