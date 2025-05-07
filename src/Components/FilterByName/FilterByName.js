import React from 'react'
import "./FilterByName.css"
import { Form } from 'react-bootstrap'

const FilterByName = ({inputSearch,setInputSearch}) => {
    return (
        <div className='filter-name'>
            <Form.Control type="text" 
            placeholder="Enter Movie Title..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)} 
            />
        </div>
    )
}

export default FilterByName