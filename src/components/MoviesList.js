import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => (
    <div>
        {Object.keys(movies).map(movieID => 
            <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>)}
    </div>
)

export default MoviesList
