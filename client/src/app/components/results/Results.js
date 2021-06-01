

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
// import requests from '../api/requests';

const Results = ({selected, type}) => {

  const [elements, setElements] = useState([]);


  useEffect(() => {
    async function fechData () {
      const request = await axios.get(selected);
      
      setElements(request.data.results);
      return request;
    }
    fechData();
  },[selected, type])

  return (
    <div className={styles.results}>
      <div className='container'>
        <div className={styles.results__body}>
          <FlipMove>
            {elements.filter(element => element.backdrop_path || element.poster_path).map(element => (
              <Card key={element.id} element={element} type={type}/>
            ))}
          </FlipMove>
        </div>

      </div>

    </div>
  )
}

export default Results
