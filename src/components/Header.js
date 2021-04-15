import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top News
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest News
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best News
        </NavLink>
      </div>	  
    </React.Fragment>
  );
};

export default Header;
