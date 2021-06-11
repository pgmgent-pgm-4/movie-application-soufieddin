import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
import requests from '../../api/requests';
import { useFetch } from '../../hooks';

const HomeResults = () => {
  const [trending, isTrendingLoading] = useFetch(requests.fetch_trending);
  const resultsTrending = trending && trending.results;
  const limitedTrending = trending && resultsTrending.slice(0,6)

  const [nowMovies, isMoviesLoading] = useFetch(requests.fetch_now_movies);
  const resultsMovies = nowMovies && nowMovies.results;
  const limitedNowMovies = nowMovies && resultsMovies.slice(0,6)

  const [nowShows, isShowsLoading] = useFetch(requests.fetch_now_shows);
  const resultsShows = nowShows && nowShows.results;
  const limitedNowShows = nowShows && resultsShows.slice(0,6)


  return (
    <div className={styles.results}>
      <div className='container'>
        <div className={styles.results__body}>
          <strong className={styles.results__body__title}>Trending</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {isTrendingLoading || !limitedTrending ? <div>Loading...</div> : limitedTrending.map(element => (
              <Card key={element.id} element={element}/>
            ))}
          </FlipMove>
          <strong className={styles.results__body__title}>Now Playing Movies</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {isMoviesLoading || !limitedNowMovies ? <div>Loading...</div> : limitedNowMovies.map(element => (
              <Card key={element.id} element={element} type='movie'/>
            ))}
          </FlipMove>
          <strong className={styles.results__body__title}>Now Playing Tv Shows</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {isShowsLoading || !limitedNowShows ? <div>Loading...</div> : limitedNowShows.map(element => (
              <Card key={element.id} element={element} type='tv'/>
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  )
}

export default HomeResults
