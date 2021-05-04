import React from 'react';
import { unavailable } from '../../config/Config';
import './MovieCard.css';
import Rating from './Rating';



const MovieCard = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div className="movie_card">
                        <div className="image_content">
                            <img className="poster" src={movie.Poster ? movie.Poster : unavailable} alt={movie.title} />
                            <div className="over_lay" onClick={() => props.handleFavouritesClick(movie)}>
                                <div className="favourite_text">
                                    <FavouriteComponent className="favourite_text_add" />
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <b className="title">{movie.Title}</b>
                            <div className="show_title">
                                <span className="subtitle">{movie.Type === 'movie' ? "Movie" : "Tv Series"}</span>
                                <span className="subtitle">{movie.Year}</span></div>
                            <div className="star">
                                <Rating />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="list">
            </div>
        </>
    );
};

export default MovieCard;