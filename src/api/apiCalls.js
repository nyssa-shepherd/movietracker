import apiKey from './apiKey';

export const fetchMovies = async () => {
  try {
    const initalFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const { results } = await initalFetch.json();
    return results;
  } catch(error) {
    throw new Error('error');
  }
};