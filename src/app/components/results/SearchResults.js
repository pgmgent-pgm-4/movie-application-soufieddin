import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlipMove from 'react-flip-move';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import styles from './Results.module.scss';

const SearchResults = () => {
  const [elements, setElements] = useState([]);
  const params = useParams();
  console.log(params.query);
  let url = (`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params.query}&page=1&include_adult=false
  `);
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
            {elements.map(element => (
            <Card key={element.id} element={element}/>
            ))}
         </FlipMove>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
