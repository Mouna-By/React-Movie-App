// MovieCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            
            <Link to={`/movie/${movie.id}`} state={{ movie } } className="card-link">
                <img src={movie.posterUrl} alt={movie.title} className="poster" />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rate}/5</p>
            </Link>
        </div>
    );
};

export default MovieCard;

