import React from 'react';

const MovieShow = ({match, movies}) => (
    <h3>{movies[match.params.movieID].title}</h3>
)
export default MovieShow;
