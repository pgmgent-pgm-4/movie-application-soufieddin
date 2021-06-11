
import { useEffect, useState } from 'react';



const useFetch = (api) => {
  const [res, setRes] = useState(null);
  const [isLoading,setIsLoading]= useState(true);
  // const [error,setError]= useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setRes(result);
      }
      catch(error){
        console.error(error.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    getData();
  }, [api])
  return [res, isLoading]
}

export default useFetch;
