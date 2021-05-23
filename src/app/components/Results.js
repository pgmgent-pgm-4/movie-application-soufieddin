import React from 'react'
import Card from './Card';
import styles from './Results.module.scss';

const Results = () => {
  return (
    <div className={styles.results}>
      <div className='container'>
        <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>

      </div>

    </div>
  )
}

export default Results
