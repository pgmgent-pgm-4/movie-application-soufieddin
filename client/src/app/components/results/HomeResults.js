import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
import requests from '../../api/requests';

const HomeResults = () => {
  const [elements_1, setElements1] = useState([]);
  const [elements2, setElements2] = useState([]);
  const [elements3, setElements3] = useState([]);


  useEffect(() => {
    const api1 = requests.fetch_trending;
    const api2 = requests.fetch_now_movies;
    const api3 = requests.fetch_now_shows;
    async function fechData () {
      const request = await axios.get(api1);
      const request2 = await axios.get(api2);
      const request3 = await axios.get(api3);
      setElements1(request.data.results.slice(0,6));
      setElements2(request2.data.results.slice(0,6));
      setElements3(request3.data.results.slice(0,6));
      return [request, request2, request3];
    }
    fechData();
  },[])

  return (
    <div className={styles.results}>
      <div className='container'>
        <div className={styles.results__body}>
          <strong className={styles.results__body__title}>Trending</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {elements_1.map(element => (
              <Card key={element.id} element={element}/>
            ))}
          </FlipMove>
          <strong className={styles.results__body__title}>Now Playing Movies</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {elements2.map(element => (
              <Card key={element.id} element={element} type='movie'/>
            ))}
          </FlipMove>
          <strong className={styles.results__body__title}>Now Playing Tv Shows</strong>
          <FlipMove className={styles.results__body__wrapper}>
            {elements3.map(element => (
              <Card key={element.id} element={element} type='tv'/>
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  )
}

export default HomeResults
