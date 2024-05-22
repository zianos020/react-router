import React,
 { useState }
  from 'react';
import './App.css';
import MovieList from './comp/Molist/MovieList';
import { moviesData } from './comp/dattt/Data';
import AddMOv from './comp/addmov/AddMOv';
import FilterName from './comp/filterName/FilterName';
import FilterByRate from './comp/filterrate/FilterByRate'




function App() {
  const [movies,setMovies] =useState(moviesData);
  const [filter, setFilter] = useState ("")
  const [rating, setRating] = useState(1)

const add=(newMovies)=>{setMovies([...movies,newMovies])};


  return (
    <div className="App">
      
      <FilterName filter = {filter} setFilter = {setFilter}/>
      <FilterByRate isMovieRating = {false}  rating={rating} setRating = {setRating}/>
      <AddMOv add={add}/>
      <MovieList movies={movies} filter = {filter} rating={rating} />
    </div>
  );
}

export default App;
