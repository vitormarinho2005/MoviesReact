import React from 'react'
import './MovieList.css'

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="details-btn">
              Ver Detalhes
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
