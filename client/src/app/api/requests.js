const api_key = process.env.REACT_APP_API_KEY;

const points =  {
  fetch_trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
  fetch_popular_movies: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  fetch_popular_shows: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`,
  fetch_now_movies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=2`,
  fetch_now_shows: `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&page=1`,
  fetch_bestRated_movies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  fetch_upComming_movies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  fetch_bestRated_shows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=2`,
  fetch_OnTv_shows: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=2`,


}
export default points;