/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Card from './Card';

export const Search = () => {
    const [moviesFound, setMoviesFound] = useState([]);
    const [flag, setFlag] = useState(false);
    let urlBase = 'https://api.themoviedb.org/3/search/movie?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US&page=1&include_adult=false';
    const searchMovie = async (e) => {
        let movieName = e.target.value;
        if (movieName.length > 1) {
            try {
                const { data } = await axios.get(`${urlBase}&query=${movieName}`)
                setMoviesFound(data.results);
                setFlag(true)
            } catch (error) {
                console.error(error)
            }

        }

        if (movieName.length === 0) {
            setFlag(false);
            setMoviesFound([])
        }


    }
    return (
        <Fragment>
            <div className="container">
                <div className="row p-2">
                    <div className="col-md-12">
                        <h1 className="text-center">Search Movies</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <input onChange={e => searchMovie(e)} type="text" className="form-control" placeholder="name of the movie" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {moviesFound &&
                <div className="container">
                    <div className="row">
                        {
                            moviesFound.map((movie, index) => {
                                return <div key={index} className="col-md-4 mt-5">
                                    <Card movie={movie} />
                                </div>
                            })
                        }
                    </div>
                </div>
            }

            {flag === true && moviesFound.length === 0 &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                                <h1>No movies found 😞</h1>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Search;
