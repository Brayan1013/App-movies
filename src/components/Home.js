import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';

export const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const urlBase = "https://api.themoviedb.org/3/movie/upcoming?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US&page=1";
    const getUpcomingsmovies = async () => {
        try {
            const { data } = await axios.get(urlBase);
            setUpcomingMovies(data.results)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUpcomingsmovies();
    }, [])
    return (
        <Fragment>
            {upcomingMovies &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-info pt-2">Movies</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            upcomingMovies.map((movie, index) => {
                                return <div key={index} className="col-md-4 mt-5">
                                    <Card movie={movie} />
                                </div>
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Home;
