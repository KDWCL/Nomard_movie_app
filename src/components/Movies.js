import React from 'react';
import { Link } from 'react-router-dom';
import ProTypes from 'prop-types';
// state를 쓰지 않으므로 function형을 쓰겠음.
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}>
      <div className='movie'>
        <img src={poster} alt={title} title={title} />
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <h5 className='movie__year'>{year}</h5>
          <ul className='movie__genres'>
            {genres.map((genre, index) => {
              return (
                <li key={index} className='genres__genre'>
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className='movie__summary'>{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: ProTypes.number.isRequired,
  year: ProTypes.number.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  poster: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired
};

export default Movie;

// props -> location -> state에 가보면 Link를 통해서 props를 준것을 확인 가능
