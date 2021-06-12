import {useParams} from 'react-router-dom';
import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
import useQuery  from '../../hooks/query';
import { useFetch } from '../../hooks';



const SearchResults = ({type, genre, scoreH, scoreL}) => {
  //const [elements, setElements] = useState([]);
  const p = useParams().target;


  const params = useQuery();
  const query = params.get('query');
  const keyword = params.get('keyword');
  const t = params.get('type');
  const personId = params.get('personId');

    let url = (`${query ? `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false` : `https://api.themoviedb.org/3/discover/${t}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=${keyword ? keyword : ''}&with_cast=${personId ? personId : ''}&with_watch_monetization_types=flatrate`}`);
    const [searchElements, isSearchelementsLoading] = useFetch(url);
    const resultsSearch = searchElements && searchElements.results;
  return (
    <div>
      <div className={styles.results}>
        <div className='container'>
          <div className={styles.results__body}>
            {p ? <p><span>{keyword? 'Keywoord: ' : 'Actuer:'}</span>&nbsp;{p}</p> : ''}
          <FlipMove>
            {isSearchelementsLoading || !resultsSearch ? <div>Loading...</div> : 
              (!query ? resultsSearch.filter(element => element.backdrop_path || element.poster_path).filter(element => element.vote_average >= scoreL && element.vote_average <= scoreH)
            .map(element => (
              <Card key={element.id} element={element} type={type} t={t}/>)) : (genre === 0 ? resultsSearch.filter(element => element.backdrop_path || element.poster_path).filter(element =>( element.media_type === type || element.media_type === t )).filter(element => element.vote_average >= scoreL && element.vote_average <= scoreH).map(element => (<Card key={element.id} element={element} t={t}/>)) : resultsSearch.filter(element => element.backdrop_path || element.poster_path).filter(element => element.vote_average >= scoreL && element.vote_average <= scoreH).filter(element => element.media_type === type || element.media_type === t).filter((element => element.genre_ids.includes(genre))).map(element => (
                <Card key={element.id} element={element} type={type} t={t}/>
              ))))
            }
          </FlipMove>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
