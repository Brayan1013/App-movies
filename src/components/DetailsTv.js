/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const noProfileImge = require('../images/no-profile.jpeg')

export const DetailsTv = () => {
    const [tvShow, setTvShow] = useState({});
    let { id } = useParams();
    let urlBase = `https://api.themoviedb.org/3/tv/${id}?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US`;
    let urlBaseImage = 'http://image.tmdb.org/t/p/w154';

    const getTvShow = async () => {
        const { data } = await axios.get(urlBase);
        setTvShow(data)
    }

    useEffect(() => {
        getTvShow()
    }, [])
    return (
        <Fragment>
            {tvShow &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                            <h1 className="text-danger text-center">Tv shows Details</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{tvShow.name}</h2>
                            <p>{tvShow.overview}</p>
                            <p>Number of seasons: {tvShow.number_of_seasons}</p>
                            <p>Number of episodes: {tvShow.number_of_episodes}</p>
                        </div>
                        <div className="col-md-6 text-center">
                            {
                                <img src={(tvShow.poster_path) ? `${urlBaseImage}/${tvShow.poster_path}` : null} alt="poster" />
                            }
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-12 text-center">
                            <h1 className="text-center text-info">Creators</h1>
                            {tvShow.created_by &&
                                tvShow.created_by.map((creator) => {
                                    return <div key={creator.id}>
                                        <img className="rounded-circle" src={(creator.profile_path) ? `${urlBaseImage}/${creator.profile_path}` : noProfileImge} alt="creator" ></img>
                                        <h4>{creator.name}</h4>
                                        <h4>gender: {(creator.gender === 2) ? 'Male' : 'Female'}</h4>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default DetailsTv
