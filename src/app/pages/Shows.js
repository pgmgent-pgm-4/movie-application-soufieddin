import { useState } from 'react';
import { Results, SubNavShows } from '../components';
import { BaseLayout } from '../layouts';
import requests from '../api/requests';

const Shows = () => {
  const [selected, setSelected] = useState(requests.fetch_popular_shows);
  const [type, setType] = useState('');
  return (
    <BaseLayout>
      <SubNavShows setSelected={setSelected} setType={setType}/>
      <Results selected={selected} type={type}/>
    </BaseLayout>
  )
}

export default Shows;
