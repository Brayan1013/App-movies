import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
const noImageBackground = require('../images/noImage.jpg')

export const Card = ({ movie }) => {
    const urlBaseImage = 'http://image.tmdb.org/t/p/w342/';
    return (
        <Fragment>
            {movie.title &&
                <div className="card" style={{ width: '18rem' }}>
                    <img src={(movie.poster_path) ? `${urlBaseImage}/${movie.poster_path}` : noImageBackground} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">Release date {movie.release_date}</p>
                        <Link to={`/details/${movie.id}`} className="btn btn-outline-danger">Details</Link>
                    </div>
                </div>
            }
            {movie.name &&
                <div className="card" style={{ width: '18rem' }}>
                    <img src={(movie.poster_path) ? `${urlBaseImage}/${movie.poster_path}` : noImageBackground} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-text">First air date {movie.first_air_date}</p>
                        <Link to={`/details-tv/${movie.id}`} className="btn btn-outline-danger">Details</Link>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Card;
