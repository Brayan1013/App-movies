import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

export const Details = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const [keyTrailer, setKeyTrailer] = useState();
    const noImage = 'https://st4.depositphotos.com/14953852/24651/v/450/depositphotos_246517344-stock-illustration-image-available-icon-vector-flat.jpg';
    let urlBaseDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US`
    let urlBaseImage = 'http://image.tmdb.org/t/p/w185';
    let urlBaseTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US#`

    const getDetailsMovies = async () => {
        try {
            const { data } = await axios.get(urlBaseDetail)
            setMovie(data)
        } catch (error) {
            console.error(error)
        }
    }

    const getTrailer = async () => {
        try {
            const { data } = await axios.get(urlBaseTrailer)
            setKeyTrailer(data.results[0].key)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getDetailsMovies();
        getTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            {movie &&
                <div className="container">
                    <div className="row text-center pt-2">
                        <div className="col-md-12">
                            <hr />
                            <h1>Details</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row pt-4 text-center">
                        <div className="col-md-6">
                            <h2 className="text-danger">Original title: {movie.original_title}</h2>
                            <h4 className="text-info">{(movie.tagline) ? movie.tagline : null}</h4>
                            <p>{movie.overview}</p>
                            <p className="text-danger">Status: {movie.status}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={(movie.poster_path) ? `${urlBaseImage}/${movie.poster_path}` : noImage} alt="Movie" />
                        </div>
                    </div>
                    {keyTrailer &&

                        <div className="row p-5 m-5">
                            <div className="col-md-12 m-3">
                                <hr />
                                <h1 className="text-center">Trailer</h1>
                                <hr />
                            </div>
                            <div className="col-md-12 center">

                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${keyTrailer}`}
                                    controls={true}
                                />

                            </div>
                        </div>
                    }
                </div>
            }
        </Fragment>
    )
}

export default Details;
