import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FilterbyRate from '../filterrate/FilterByRate'
import {Link} from 'react-router-dom'


const MovieCard = ({movie}) => {
  return (
    <div>
<Card style={{ width: '18rem' } }>
      <Card.Img variant="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <FilterbyRate isMovieRating={true} movieRating = {movie.rate}/>
        <Card.Text>{movie.description}</Card.Text>
        <Link to = {`/movie/${movie.id}`}>
          <Button variant="primary">description</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard