import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';
import Comments from '../components/Comments';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>        
		   <Route path="/comments/:id" 
		   
		   render={({ match }) => {
              const { id } = match.params;
                  return <Comments id={id} />;
              
			  }}
		    />
		   <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
		   <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (['top', 'new', 'best'].includes(type)) {
                 return <ShowStories type={type} />;
              }
             
            }}
          />
		  
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
