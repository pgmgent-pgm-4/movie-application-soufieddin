
import { useState } from 'react';
import { SearchResults, SubNavSearch} from '../components';
import useQuery from '../hooks/query';
import { BaseLayout } from '../layouts';


const Search = () => {
  const params = useQuery();
  let word = params.get('keyword');
  let text = params.get('query');
  const [type, setType] = useState('movie');
  return (
    <BaseLayout>
      {text ? <SubNavSearch setType={setType} /> : ''}
      
      <SearchResults type={type}/>
    </BaseLayout>
  )
}

export default Search;
