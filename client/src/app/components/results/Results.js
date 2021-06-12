
import FlipMove from 'react-flip-move';
import Card from '../card/Card';
import styles from './Results.module.scss';
import { useFetch } from '../../hooks';

const Results = ({selected, type, scoreH, scoreL}) => {
  const [media, isMediaLoading] = useFetch(selected);
  const resultsMedia = media && media.results;
  return (
    <div className={styles.results}>
      <div className='container'>
        <div className={styles.results__body}>
          <FlipMove>
            {isMediaLoading || !media ? <div>Loading...</div> : resultsMedia.filter(element => element.backdrop_path || element.poster_path).filter(element => element.vote_average > scoreL && element.vote_average < scoreH).map(element => (
              <Card key={element.id} element={element} type={type}/>
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  )
}
export default Results;
