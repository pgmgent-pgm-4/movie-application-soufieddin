import { useState } from 'react';
import { Results, SubNavMovies } from '../components';
import { BaseLayout } from '../layouts';
import requests from '../api/requests';

const Movies = () => {
  const [selected, setSelected] = useState(requests.fetch_popular_movies);
  const [type, setType] = useState('movie');
  return (
    <BaseLayout>
      <SubNavMovies setSelected={setSelected}  setType={setType}/>
      <Results selected={selected} type={type}/>
    </BaseLayout>
  )
}

export default Movies
