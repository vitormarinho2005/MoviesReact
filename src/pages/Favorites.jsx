import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import './Favorites.css'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(savedFavorites)
  }, [])

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return (
    <div className="favorites">
      <h1>❤️ Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você ainda não tem filmes favoritos.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div key={movie.id} className="favorite-item">
              <MovieCard movie={movie} />
              <button
                className="remove-btn"
                onClick={() => handleRemoveFavorite(movie.id)}
              >
                Remover dos Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
