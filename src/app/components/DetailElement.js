import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailElement = () => {
  const params = useParams();
  let url = (`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=8aa3a6efa82617beae9311a4b0ef1f76&language=en-US`);
  useEffect(() => {
    async function fechData () {
      const request = await axios.get(url);
      console.log(request.data);
      return request;
    }
    fechData();
  },[url])

  return (
    <div>
      <h2>xxx</h2>
    </div>
  )
}

export default DetailElement;
