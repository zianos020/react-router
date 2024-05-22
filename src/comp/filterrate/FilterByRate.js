import React from 'react';
import {  Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = ({isMovieRating, rating,setRating, movieRating}) => {
  const handleChange = (value) => {
    setRating (value)
  }
  return isMovieRating ?(
    <div>
              <Rate  disabled value={movieRating} />

    </div>

  ): (
    <div>
    <Rate tooltips={desc} onChange={handleChange} value={rating} />

</div>
  )
};

export default App;