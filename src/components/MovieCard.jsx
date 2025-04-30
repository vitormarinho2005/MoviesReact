import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sem+Imagem'

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`} className="details-btn">
        Ver Detalhes
      </Link>
    </div>
  )
}
