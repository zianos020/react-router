import React from 'react'
import { Form } from 'react-bootstrap'

const FilterName = ({filter, setFilter}) => {
  return (
    <div>
        <Form.Control 
        type="text" 
        placeholder="search" 
        value = {filter}
        onChange={(e) =>setFilter (e.target.value)}
        />
    </div>
  )
}

export default FilterName