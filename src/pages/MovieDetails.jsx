import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './MovieDetails.css'

export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const API_KEY = 'a90fff95fa96502bf022728c9702c896'

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        const data = await res.json()
        setMovie(data)
        setLoading(false)

        const saved = localStorage.getItem('favorites')
        const favList = saved ? JSON.parse(saved) : []
        const alreadySaved = favList.some((fav) => fav.id === data.id)
        setIsFavorite(alreadySaved)
      } catch (err) {
        console.error('Erro ao buscar detalhes do filme', err)
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  const handleToggleFavorite = () => {
    const saved = localStorage.getItem('favorites')
    let favList = saved ? JSON.parse(saved) : []

    if (isFavorite) {
      favList = favList.filter((item) => item.id !== movie.id)
    } else {
      favList.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path })
    }

    localStorage.setItem('favorites', JSON.stringify(favList))
    setIsFavorite(!isFavorite)
  }

  if (loading) return <p className="loading">Carregando detalhes...</p>
  if (!movie) return <p className="error">Filme não encontrado.</p>

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Voltar
      </button>

      <div className="details-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="info">
          <h2>{movie.title}</h2>
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
          <p><strong>Nota:</strong> ⭐ {movie.vote_average}</p>

          <button onClick={handleToggleFavorite} className="favorite-button">
            {isFavorite ? '❌ Remover dos Favoritos' : '❤️ Salvar nos Favoritos'}
          </button>
        </div>
      </div>
    </div>
  )
}
