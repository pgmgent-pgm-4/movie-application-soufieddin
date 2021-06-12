import React, { useState } from 'react'

import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";

import styles from './DetailElement.module.scss';
import { useFetch } from '../../hooks';
import { useParams } from 'react-router';

const base_img_url = 'https://image.tmdb.org/t/p/original/';

const DetailElement = () => {
  const {theme} = useContext(ThemeContext);


  const id = useParams().id;
  const type = useParams().type;
  console.log(id)
  const [check, setCheck] = useState(false);

 
  let url = (`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`);
  let urlKeys = (`https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`);
  let urlCast = (`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US}`);
  
  const [element, isElementLoading] = useFetch(url);
  
  const [words, isWordsLoading] = useFetch(urlKeys)
  const resultsWords = words && (words.keywords ? words.keywords : words.results);
  const [cast, isCastLoading] = useFetch(urlCast);
  const resultsCast = cast && cast.cast.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1);

  return (
    
    <div className='container'>
      <div className = {styles.detail}>
      {isElementLoading || !element ? <div>Loading...</div> : 
      <div className ={styles.detail__info}>
          <div className = {styles.detail__info__img}>
            <img  src={`${base_img_url}${element.backdrop_path ? element.backdrop_path : element.poster_path}`} alt='movie poster' />
          </div>
          <div className={styles.detail__info__text}>
            <div className={styles.detail__info__text__title}>
              <strong>{element.name || element.title || element.original_name || element.original_title}</strong>
              <span className={styles.detail__info__text__title__check}><label onClick={()=> setCheck(!check)} className={classNames(styles.detail__info__text__title__check__label, `${theme === 'dark' ? `${!check ? styles.detail__info__text__title__check__label__unchecked__dark : styles.detail__info__text__title__check__label__checked__dark}` : `${!check ? styles.detail__info__text__title__check__label__unchecked__light :styles.detail__info__text__title__check__label__checked__light}`}`)} >{!check ? 'Add to wishlist' : 'Remove from wishlist'}</label><input type="checkbox" checked={check}/></span>
            </div>
            <div>Overview<a href={`https://www.youtube.com/watch?v=${element.videos.results[0].key}`}>Watch the trailer</a></div>
            <p>{element.overview}</p>
            <ul className={classNames(styles.detail__info__text__list, `${theme === 'dark' ? styles.detail__info__text__list__dark : styles.detail__info__text__list__light}`)}>
              <li><strong>Budget</strong> <span>${element.budget}</span></li>
              <li><strong>Status</strong><span>{element.status}</span></li>
              <li><strong>Runtime</strong><span>{element.runtime} min</span></li>
              <li><strong>Score</strong><span>{element.vote_average}/10</span></li>
            </ul>
          </div>
      </div>
      }
        <p className={styles.detail__keys}>{words ? 'Keywords:' : ''}</p>
        <ul className={classNames(styles.detail__keywords, `${theme === 'dark' ? styles.detail__keywords__dark : styles.detail__keywords__light}`)}>{isWordsLoading || !resultsWords ? <div>Loading...</div> : resultsWords.map(k => (<li key={k.id}><a href={`/filterWord/${k.name}/${type}/${k.id}`} id={k.id}>{k.name}</a></li>))}</ul>
        <ul className={classNames(styles.detail__cast, `${theme === 'dark' ? styles.detail__cast__dark : styles.detail__cast__light}`)}>{isCastLoading || !resultsCast ? <div>Loading...</div> : resultsCast.filter(c => c.profile_path).map(c => (<li key={c.id}><a href={`/filterActuer/${c.name}/${type}/${c.id}`}><img src={`${base_img_url}${c.profile_path}`} alt="" /><span>{c.name}</span></a></li>))}</ul>
    </div>
    </div>
  )
}

export default DetailElement;
