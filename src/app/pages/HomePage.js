import { useState } from 'react';
import { Results, SubNavHome } from '../components';
import { BaseLayout } from '../layouts';
import requests from '../api/requests';

const HomePage = () => {
  const [selected, setSelected] = useState(requests.fetch_trending);
  const [type, setType] = useState('');
  return (
    <BaseLayout>
      <SubNavHome setSelected={setSelected} setType={setType}/>
      <Results selected={selected} type={type} />
    </BaseLayout>
  )
}

export default HomePage
