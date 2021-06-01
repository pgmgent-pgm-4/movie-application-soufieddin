import { useEffect, useState } from 'react';
import { Results, SubNavMovies, SubNavSearch, SubNavShows } from '../components';
import { BaseLayout } from '../layouts';
import requests from '../api/requests';

const Media = () => {
  
  const [type, setType] = useState('movie');
  const [selected, setSelected] = useState(requests.fetch_popular_movies);
  useEffect(() => {
    setSelected(`${type === 'movie' ? requests.fetch_popular_movies : requests.fetch_popular_shows }`);
    
  }, [type]);
  return (
    <BaseLayout>
      <SubNavSearch setType={setType}/>
      {type === 'movie' ? <SubNavMovies setSelected={setSelected} selected={selected}  setType={setType}/> :  <SubNavShows setSelected={setSelected} selected={selected} setType={setType}/>}
      <Results selected={selected} type={type}/>
    </BaseLayout>
  )
}

export default Media
