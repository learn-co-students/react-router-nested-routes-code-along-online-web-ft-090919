import React from 'react';

const MovieShow = ({movies, match}) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
      <h4>End of MovieShow component</h4>
    </div>
  );
}

export default MovieShow;
