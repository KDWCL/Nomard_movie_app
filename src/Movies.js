import React from "react";
import ProTypes from "prop-types";
// state를 쓰지 않으므로 function형을 쓰겠음.

function Movie({id, year, title, summary, poster}){
return <h4>{title}</h4>
}

Movie.propTypes = {
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster: ProTypes.string.isRequired
}

export default Movie;