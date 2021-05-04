import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import SearchIcon from '@material-ui/icons/Search';
import MovieCard from '../MovieCard/MovieCard';
import AddFavourites from './AddFavourite';
import RemoveFavourites from './RemoveFavourite'
import './Movie.css';
import Pagination from './Pagination';


const Movies = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [search, setSearch] = useState('');
    const [favourites, setFavourites] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPAge] = useState(6);
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)


    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const results = await axios("http://www.omdbapi.com", {
                    params: {
                        apikey: "48b88f25",
                        s: 'Avengers'
                    }
                });
                setData(results.data.Search)

            } catch (error) {
                setIsError(true);
                setTimeout(() => setIsError(false), 3000);
            }


            setIsLoading(false);
        }

        fetchData();
    }, []);

    const loadingMovies = () => {
        if (isLoading) {
            return <Loader />
        }
        return (
            <div className="movies">
                <MovieCard
                    movies={currentItems}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites}
                />
            </div>
        );
    }
    const renderError = () => {
        if (isError) {
            return (
                ("Something went wrong. Please Reload the page")
            );
        }
    }
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const handleSubmit = async event => {
        setIsError(false);
        setIsLoading(true);
        event.preventDefault();
        try {
            const results = await axios("http://www.omdbapi.com", {
                params: {
                    apikey: "48b88f25",
                    s: search
                }
            });
            setData(results.data.Search);
        } catch (error) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="main_content">
                <div className="search_movie">
                    <div className="search">
                        <input type="text" placeholder="Search..." onChange={handleSearchChange} value={search} />
                        <SearchIcon className="btn-src" onClick={handleSubmit} />
                    </div>
                    <div className="movie_content">
                        {renderError()}
                        {loadingMovies()}
                    </div>
                    <Pagination
                        pageSelected={pageSelected}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={data.length}
                    />
                </div>
                <div className="movie_list">
                    <div className="favourite_movie">
                        <h1>Add Favourite</h1>
                        <MovieCard
                            className="favourite"
                            movies={favourites}
                            handleFavouritesClick={removeFavouriteMovie}
                            favouriteComponent={RemoveFavourites}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movies;