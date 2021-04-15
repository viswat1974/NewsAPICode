import React from 'react';
import { useState, useEffect } from 'react';
import Story from './Story';
import Pagination from './Pagination';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';

const ShowStories = ({ type}) => {
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);
const { isLoading, stories } = useDataFetcher(type ? type : 'top' );	  
	  
	  const indexOfLastPost = currentPage * postsPerPage;
	  const indexOfFirstPost = indexOfLastPost - postsPerPage;
	  const currentPosts = stories.slice(indexOfFirstPost, indexOfLastPost);
	  
	  const paginate = pageNumber => setCurrentPage(pageNumber);

	  return (
		<React.Fragment>
		  <Loader show={isLoading}>Please Wait While Loading...</Loader>
		   <React.Fragment>
			{currentPosts.map(
			  ({ data: story }) => story && <Story key={story.id} story={story} />
			)}
			<Pagination
			postsPerPage={postsPerPage}
			totalPosts= {stories.length}
			paginate={paginate}
		  />
		  </React.Fragment>
		  
		</React.Fragment>
		 
	  );

};

export default ShowStories;
