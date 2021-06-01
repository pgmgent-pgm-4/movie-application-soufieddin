import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import useQuery from '../../hooks/query';
import styles from './DetailElement.module.scss';


const base_img_url = 'https://image.tmdb.org/t/p/original/';


const DetailElement = () => {
  const {theme} = useContext(ThemeContext);
  const [element, setElement] = useState({});
  const [words, setWords] = useState([]);
  const [cast, setCast] = useState([]);
  const params = useQuery();
  //console.log(params.get('type'));
  const [check, setCheck] = useState(false);
  console.log(check)
 
  let url = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  let urlKeys = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}/keywords?api_key=${process.env.REACT_APP_API_KEY}`);
  let urlCast = (`https://api.themoviedb.org/3/${params.get('type')}/${params.get('id')}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US}`);
  
  useEffect(() => {
    async function fechData () {
      const request = await axios.get(url);
      const request2 = await axios.get(urlKeys);
      const request3 = await axios.get(urlCast);
      //console.log([request.data, request2.data, request3.data.cast.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1).slice(0,6)]);
      setElement(request.data);
      setWords(request2.data.keywords || request2.data.results);
      setCast(request3.data.cast.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1))
      //console.log(request.data)
      return [request, request2, request3];
    }
    fechData();
  },[url, urlKeys, urlCast]);

  return (
    <div className='container'>
      <div className = {styles.detail}>
        <div className ={styles.detail__info}>
          <div className = {styles.detail__info__img}>
            <img  src={`${base_img_url}${element.backdrop_path ? element.backdrop_path : element.poster_path}`} alt='movie poster' />
          </div>
          <div className={styles.detail__info__text}>
            <div className={styles.detail__info__text__title}>
              <strong>{element.name || element.title || element.original_name || element.original_title}</strong>
              <span className={styles.detail__info__text__title__check}><label onClick={()=> setCheck(!check)} className={classNames(styles.detail__info__text__title__check__label, `${theme === 'dark' ? `${!check ? styles.detail__info__text__title__check__label__unchecked__dark : styles.detail__info__text__title__check__label__checked__dark}` : `${!check ? styles.detail__info__text__title__check__label__unchecked__light :styles.detail__info__text__title__check__label__checked__light}`}`)} >{!check ? 'Add to wishlist' : 'Remove from wishlist'}</label><input type="checkbox" checked={check}/></span>
            </div>
            
            <p><span>Overview</span>{element.overview}</p>
            <ul>
              <li>Budget: ${element.budget}</li>
              <li>status: {element.status}</li>
              <li>Runtime: {element.runtime} min</li>
              <li>Score: {element.vote_average}/10</li>
            </ul>
            
            
          </div>
        </div>

        <em>{words ? 'Keywords:' : ''}</em>
        <ul className={classNames(styles.detail__keywords, `${theme === 'dark' ? styles.detail__keywords__dark : styles.detail__keywords__light}`)}>{words.map(k => (<li key={k.id}><a href={`/search?type=movie&keyword=${k.id}`} id={k.id}>{k.name}</a></li>))}</ul>

        <ul className={classNames(styles.detail__cast, `${theme === 'dark' ? styles.detail__cast__dark : styles.detail__cast__light}`)}>{cast.filter(c => c.profile_path).map(c => (<li key={c.id}><a href={`/search?type=movie&personId=${c.id}`}><img src={`${base_img_url}${c.profile_path}`} alt="" /><span>{c.name}</span></a></li>))}</ul>
    
    </div>
    </div>
    
  )
}

export default DetailElement;
