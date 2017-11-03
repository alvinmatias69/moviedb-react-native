import LimitString from './LimitString'
import ConvertGenre from './ConvertGenre'

export default (movieList, genreList) => {
  const transformedMovie = movieList.map((movie) => {
    movie.release_date = movie.release_date.substring(0, 4)
    movie.title = LimitString(movie.title, 22)
    movie.overview = LimitString(movie.overview, 80)
    movie.genre = ConvertGenre(movie.genre_ids, genreList)
    return movie
  })

  return transformedMovie
}
