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
  fetch_action_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
  fetch_mystery_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,
  fetch_animation_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  fetch_comedy_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  fetch_crime_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate`,
  fetch_horror_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  fetch_drama_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`,
  fetch_thriller_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=53&with_watch_monetization_types=flatrate`,
  fetch_war_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_monetization_types=flatrate`,  
  fetch_fantasy_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`,
  fetch_family_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`,
  fetch_action_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759&with_watch_monetization_types=flatrate`,
  fetch_animation_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  fetch_comedy_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  fetch_crime_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate`,
  fetch_drama_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`,
  fetch_family_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`,
  fetch_kids_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10762&with_watch_monetization_types=flatrate`,
  fetch_mystery_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,
  fetch_war_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10768&with_watch_monetization_types=flatrate`,
  fetch_reality_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10764&with_watch_monetization_types=flatrate`,
  fetch_talk_tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10767&with_watch_monetization_types=flatrate`,


}
export default points;

