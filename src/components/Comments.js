import React from 'react';
import { useState, useEffect } from 'react';
import Story from './Story';
import Pagination from './Pagination';
import useDataFetcher from '../hooks/dataKids';
import Loader from './Loader';

const Comments = ({ id}) => {
const { isLoading, comments } = useDataFetcher(id ? id : 0 );	  
	
	  return (
		<React.Fragment>
		  <Loader show={isLoading}>Please Wait While Loading...</Loader>
		   <React.Fragment>
			{comments.map(
			  ({ data: story }) => story && <Story key={story.id} story={story} />
			)}			
		  </React.Fragment>		  
		</React.Fragment>
		 
	  );

};

export default Comments;
