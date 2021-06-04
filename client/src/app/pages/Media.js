import { useEffect, useState } from 'react';
import { Results, SubNavMovies, SubNavScore, SubNavSearch, SubNavShows } from '../components';
import { BaseLayout } from '../layouts';
import requests from '../api/requests';

const Media = () => {
  
  const [type, setType] = useState('movie');
  const [selected, setSelected] = useState(requests.fetch_popular_movies);
  const [scoreH, setScoreHigh] = useState(10);
  const [scoreL, setScoreLow] = useState(7);
  useEffect(() => {
    setSelected(`${type === 'movie' ? requests.fetch_popular_movies : requests.fetch_popular_shows }`);
    
  }, [type]);
  return (
    <BaseLayout>
      <SubNavSearch setType={setType}/>
      {type === 'movie' ? <SubNavMovies setSelected={setSelected} selected={selected}  setType={setType}/> :  <SubNavShows setSelected={setSelected} selected={selected} setType={setType}/>}
      <SubNavScore setScoreHigh={setScoreHigh} setScoreLow={setScoreLow}/>
      <Results selected={selected} type={type} scoreL={scoreL} scoreH={scoreH}/>
    </BaseLayout>
  )
}

export default Media
