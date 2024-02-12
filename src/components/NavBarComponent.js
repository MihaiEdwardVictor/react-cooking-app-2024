import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Search Term:',searchTerm)
    // Pass the search term to the parent component
    onSearch(searchTerm);
    // Optionally, you can navigate to a search results page
    // navigate(`/search/${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary   my-2 my-sm-0" onClick={handleSearch}>Search</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;