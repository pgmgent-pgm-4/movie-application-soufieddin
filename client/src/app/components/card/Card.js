import React, { forwardRef } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import styles from './Card.module.scss';

const base_img_url = 'https://image.tmdb.org/t/p/original/';

const Card = forwardRef(({element, type}, ref) => {
  const {theme} = useContext(ThemeContext);

  return (
      <a href={`/details/${element.media_type || type}/${element.id}`} ref={ref} className={classNames(styles.card, `${theme === 'dark' ? styles.card__dark : styles.card__light}`)} id = {element.id} > 
        <img src={`${base_img_url}${element.backdrop_path || element.poster_path}`} alt='movie poster' />
        <div className={styles.card__info}>
          <LinesEllipsis
            text={element.overview}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          <strong>{element.title || element.original_name}</strong>
          <div className={styles.card__info__extra}>
            <p>{element.vote_average}/10 | ({element.vote_count} Votes) </p>
            <p>{element.release_date || element.first_air_date}</p>
          </div>
        </div>
      </a>
  )
});

export default Card
