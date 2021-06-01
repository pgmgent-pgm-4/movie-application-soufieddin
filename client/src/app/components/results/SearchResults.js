import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
import useQuery  from '../../hooks/query';



const SearchResults = ({type}) => {
  const [elements, setElements] = useState([]);
  const params = useQuery();
  const query = params.get('query');
  const keyword = params.get('keyword');
  const t = params.get('type');
  const personId = params.get('personId');
  console.log(params)
  console.log(type)
    let url = (`${query ? `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false` : `https://api.themoviedb.org/3/discover/${t}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=${keyword ? keyword : ''}&with_cast=${personId ? personId : ''}&with_watch_monetization_types=flatrate`}`);

  useEffect(() => {

    async function fechData () {
      
      const request = await axios.get(url);
      console.log(request.data.results);
      setElements(request.data.results);
      return request;
    }
    fechData();
  },[url]);

  return (
    <div>
      <div className={styles.results}>
        <div className='container'>
          <div className={styles.results__body}>
          <FlipMove>
            {
              query ? elements.filter(element => element.backdrop_path || element.poster_path).filter(element => element.media_type === type).map(element => (
                <Card key={element.id} element={element} t={t}/>
                ))  : elements.filter(element => element.backdrop_path || element.poster_path).map(element => (
                  <Card key={element.id} element={element} t={t}/>
                  ))
            }
            
         </FlipMove>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
