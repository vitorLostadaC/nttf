import { useState } from "react"
import { MovieViewSchema } from "./MovieView.schema"
import "./MovieView.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export const MovieView = ({ movie }: MovieViewSchema) => {
  const [favorites, setFavorites] = useState<string[]>([])
  const currentMovieIsFavorite = !!favorites.find(
    (favoriteMovieId) => favoriteMovieId === movie.id
  )

  const handleChangeFavorite = () => {
    if (currentMovieIsFavorite) {
      setFavorites(
        favorites.filter((favoriteMovieId) => favoriteMovieId !== movie.id)
      )
    } else {
      setFavorites([...favorites, movie.id])
    }
  }

  return (
    <section id="movie-view-component">
      <div className="information">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="criticize">
          <p>
            <span>Actor:</span> {movie.actors}
          </p>
          <p>
            <span>Review:</span> {movie.rating}
          </p>
        </div>
        <button className="secundary-button" onClick={handleChangeFavorite}>
          Favorite
          {currentMovieIsFavorite ? (
            <AiFillHeart className="icon" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>
      <div>
        <img src={movie.poster} alt="Poster" />
      </div>
    </section>
  )
}
