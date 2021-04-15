import { useState, useEffect } from 'react';
import { getKids } from '../utils/apis';

const useDataFetcher = (id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    getKids(id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, comments };
};

export default useDataFetcher;
