import React from 'react';
import '../src/ListCards.css'
import RatingStars from './RatingStars'

export default function ListCards({tabListMovies,searchName,rate}) {
    return (
        <div className="top-container">
            {tabListMovies.filter(e=>(e.movieName.toLowerCase().includes(searchName.toLowerCase()) && (e.rating>=rate))).map((el,k)=>(
            <div className="container-cards">
               <RatingStars rate={el.rating }/>
                <img className="image-movies" src={el.movieImage} />
                <span>{el.movieDuration}</span>
                <span>{el.movieType}</span>
            </div>
            ))}
        </div>
    )
}
