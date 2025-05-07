import React from 'react';
import "./MovieList.css";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies, inputSearch, rating }) => {
    return (
        <div className='cards'>
            {movies
                .filter(
                    (el) => el.title.toUpperCase().includes(inputSearch.toUpperCase())
                && el.rate >= rating)
                .map((el) => (
                    <MovieCard movie={el} key={el.id} />
                ))}
        </div>
    )
}

export default MovieList