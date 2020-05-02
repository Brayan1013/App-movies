import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card'

export const Tv = () => {
    const [tvShows, setTvShows] = useState([]);
    let urlBase = 'https://api.themoviedb.org/3/tv/popular?api_key=3a023c1313a7940662ba845f8ab83824&language=en-US&page=1';
    //setTvShows(data.results)

    const getTvShows = async () => {

        try {
            const { data } = await axios.get(urlBase)
            setTvShows(data.results);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTvShows();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>
            {tvShows &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-info pt-2">Tv shows</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            tvShows.map((tvShow, index) => {
                                return <div key={index} className="col-md-4 mt-5">
                                    <Card movie={tvShow} />
                                </div>
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Tv;
