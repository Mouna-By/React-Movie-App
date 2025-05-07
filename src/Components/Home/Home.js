import FilterByName from "../FilterByName/FilterByName";
import FilterByRate from "../Rating/Rating";
import AddMovie from "../AddMovie/AddMovie";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import "./Home.css"; 

const Home = ({ movies, setMovies }) => {
    const [inputSearch, setInputSearch] = useState("");
    const [rating, setRating] = useState(1);

    const add = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    return (
        <div className="home">
            <h1>Movie App</h1>
            <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
            <FilterByRate rating={rating} setRating={setRating} isMovieRating={false} />
            <AddMovie add={add} />
            <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
        </div>
    );
};

export default Home;
