import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { moviesData } from '../comp/dattt/Data';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Desc = () => {
    const params = useParams ();
    const navigate = useNavigate ();

    const [movie, setMovie] = useState({})
    useEffect(() => {
        setMovie(moviesData.find((movie) => movie.id === +params.id) )
    }, [params.id])
    
  return (
    <div>
<Container style={{marginTop:'10%',textAlign:"center"}}>
      <Row>
        <Col>

        <h1 style={{paddingTop:'20px',textShadow: '0 10px 10px rgba(0, 0, 0, 0.748)'}}>Description OF: {movie.title}</h1>
        <p><e>{movie.description}</e></p>

        <button
        style={{backgroundColor:'rgb(123, 161, 118)',color:'black',
        borderColor:'black'
        ,cursor: 'pointer',padding:'10px'
        ,boxShadow:'0 10px 10px rgba(0, 0, 0, 0.748)'
    }}

         variant='secondary' 
    onClick={()=>navigate(-1)}
    >Go Back</button>


        </Col>
        <Col >

        <iframe style={{height:"300px" , width:"100%",boxShadow:'0 10px 10px rgba(0, 0, 0, 0.748)'}}
        title='this is a unique title key'
        src={movie.trailer}
        />

        </Col>
      </Row>
    </Container>



        </div>
  )
}

export default Desc