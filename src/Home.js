import React from 'react'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import Desc from './Moviedesc/Desc'

const Home = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element = {< App/>}/>
            <Route  path='/movie/:id' element = {<Desc />}/>
        </Routes>
    </div>
  )
}

export default Home