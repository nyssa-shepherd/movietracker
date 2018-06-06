import apiKey from './apiKey';

export const fetchMovies = async () => {
  try {
    const initalFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const { results } = await initalFetch.json();
    return results.map( movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        overview: movie.overview,
        date: movie.release_date,
        genreId: movie.genre_ids,
        favorite: false
      }
    });
  } catch(error) {
    throw new Error('error');
  }
};