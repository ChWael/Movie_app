import React from 'react';
import { useParams } from 'react-router-dom';



const Overview = ({movie}) => {
    const {Id} = useParams();
    
    return (
        <div className='Overview'>
            <div className='OverviewImg'>
                <img src = {movie.find(show => show.id === Id).img} alt = 'Poster' />
            </div>
            <div className='OverviewDetails'>
                <h2>{(movie.find(show => show.id === Id)).title}</h2>
                <h5>{(movie.find(show => show.id === Id)).description}</h5>
            </div>   
            
        </div>
    )
}



export default Overview
