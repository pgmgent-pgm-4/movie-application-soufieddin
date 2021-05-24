import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './DetailElement.module.scss';
const base_img_url = 'https://image.tmdb.org/t/p/original/';
const DetailElement = () => {
  const [element, setElement] = useState({});
  const params = useParams();
  let url = (`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=8aa3a6efa82617beae9311a4b0ef1f76&language=en-US`);
  useEffect(() => {
    async function fechData () {
      const request = await axios.get(url);
      console.log(request);
      setElement(request.data);
      return request;
    }
    fechData();
  },[url]);

  return (
    <div className = {styles.detail}>
      <img src={`${base_img_url}${element.backdrop_path || element.poster_path}`} alt='movie poster' />
      <h2>{element.title || element.original_name || element.original_title}</h2>
      <p>{element.overview}</p>
    </div>
  )
}

export default DetailElement;
