
import { useState } from 'react';

import { SearchResults, SubNavMoviesFilter, SubNavScore, SubNavSearch, SubNavShowsFilter} from '../components';

import useQuery from '../hooks/query';
import { BaseLayout } from '../layouts';


const Search = () => {

  const params = useQuery();
  let text = params.get('query');
  const keyword = params.get('keyword');
  const personId = params.get('personId');
  const [type, setType] = useState('movie');
  const [genre, setGenre] = useState(28);
  const [scoreH, setScoreHigh] = useState(10);
  const [scoreL, setScoreLow] = useState(0);
  console.log(scoreH, scoreL)
  
 
  return (
    <BaseLayout>
      {text ? <SubNavSearch setType={setType} /> : ''}
      {keyword || personId ? '' :  (type === 'movie' ? <SubNavMoviesFilter setType={setType}  setGenre={setGenre} /> :  <SubNavShowsFilter setType={setType} setGenre={setGenre} />)}
      <SubNavScore setScoreHigh={setScoreHigh} setScoreLow={setScoreLow}/>
      <SearchResults type={type} genre={genre} scoreL={scoreL} scoreH={scoreH}/>
    </BaseLayout>
  )
}

export default Search;
