import React from 'react'
import styles from './Card.module.scss';



const Card = ({movie}) => {
  return (
      <div className={styles.card}> 
        <img src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80' alt='movie' />
        <div className={styles.card__info}>
          <p>This movie is about ...</p>
          <h2>Movie title</h2>
          <p>Avarage score ...</p>
        </div>
      </div>
  )
}

export default Card
