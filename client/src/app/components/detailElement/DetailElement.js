import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useQuery from '../../hooks/query';
import styles from './DetailElement.module.scss';


const base_img_url = 'https://image.tmdb.org/t/p/original/';


const DetailElement = () => {
  const [element, setElement] = useState({});
  const [words, setWords] = useState([]);
  const [cast, setCast] = useState([]);
  const params = useQuery();
  console.log(params.get('type'));
 
  let url = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  let urlKeys = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}/keywords?api_key=${process.env.REACT_APP_API_KEY}`);
  let urlCast = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US}`);
  
  useEffect(() => {
    async function fechData () {
      const request = await axios.get(url);
      const request2 = await axios.get(urlKeys);
      const request3 = await axios.get(urlCast);
      console.log([request.data, request2.data, request3.data.cast.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1).slice(0,6)]);
      setElement(request.data);
      setWords(request2.data.keywords || request2.data.results);
      setCast(request3.data.cast.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1).slice(0,6))
      return [request, request2, request3];
    }
    fechData();
  },[url, urlKeys, urlCast]);

  return (
    <div className = {styles.detail}>
      <img src={`${base_img_url}${element.backdrop_path ? element.backdrop_path : element.poster_path}`} alt='movie poster' />
      <h2>{element.name || element.title || element.original_name || element.original_title}</h2>
      <p>{element.overview}</p>
      <ul>{words.map(k => (<li key={k.id}><a href={`/search?type=${params.get('type')}&keyword=${k.id}`} id={k.id}>{k.name}</a></li>))}</ul>
      <ul>{cast.map(c => (<li key={c.id}><img src={`${base_img_url}${c.profile_path}`} alt="" />{c.name}</li>))}</ul>
    
    </div>
  )
}

export default DetailElement;
