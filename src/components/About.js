import React, { Fragment } from 'react'
const noProfile = require('../images/no-profile.jpeg');
const movieDb = require('../images/the_movie_db.png');
export const About = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center pt-3">
                        <hr />
                        <h1 className="text-danger">About this app</h1>
                        <hr />
                    </div>
                    <div className="col-md-6 text-center">
                        <h2 className="text-info">Api</h2>
                        <img className="pt-2" src={movieDb} alt="api" />
                        <p className="text-center pt-2">This is a simple app that uses react and an API to bring movies and tv shows, It also uses bootstrap</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2 className="text-success">Developer</h2>
                        <img className="rounded-circle" src={noProfile} alt="author" />
                        <h3>
                            <p className="text-info">Brayan Hernandez Mora</p>
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default About;