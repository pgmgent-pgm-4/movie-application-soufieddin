// import {useContext, useState, useEffect} from "react";
// import classNames from "classnames";
// import axios from "axios";
// // import Select from 'react-select';
// import { ThemeContext } from "../../libs/context";
// //import requests from '../../api/requests';

// import styles from './SubNav.module.scss';

// const SubNavSearch = ({setType}) => {
//   const {theme} = useContext(ThemeContext);
  // const [genresMovie, setGenresMovie] = useState([]);
  // const [genresTv, setGenresTv] = useState([]);
  


  // useEffect(() => {
  //   const api1 =`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  //   const api2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  //   async function fechData () {
  //     const request = await axios.get(api1);
  //     const request2 = await axios.get(api2);
  //     setGenresMovie(request);
  //     setGenresTv(request2);
  //     console.log([request.data.genres, request2.data.genres]);
  //     return [request.data.genres, request2.data.genres];
  //   }
  //   fechData();
  // },[])

  
//   return (
//     <div className = 'container'>
//       <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
//       <li onClick={() => setType('movie')}>Movies</li> 
//       <li onClick={() => () => setType('tv')}>Tv Shows</li>
//       </ul>
//     </div>

//   )
// }

// export default SubNavSearch;
