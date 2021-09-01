import React from 'react';
import Rate from './Rate';


function NavBar({ setSearch, setRating }) {
    const searchHandler = (e) => {
        setSearch(e.target.value);
      };
      
    return (
        <div className = 'navbar'>
            <div className = 'title'>
            Take a Break
            </div>
            <div className = 'navbar-links'>
                <ul>
                    <li><a><Rate setRating = {setRating} /></a></li>
                    <li><a href = '#'>Home</a></li>
                    <li><a href = '#'>Movie</a></li>
                    <li><a href = '#'>Series</a></li>
                    <li><a><input onChange={searchHandler} type = 'search' placeholder = 'Search' /> <button>Search</button></a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;


