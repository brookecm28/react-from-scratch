import React from 'react'

function Footer (props) {
    return (
    <div className='allButtons'>
        <button 
            className='navigateButton' 
            id='previous'
            onClick={(e) => props.handleChange(props.index - 1)}    
        >{"<"} Previous</button>
        <div>
            <button className='centerButton'>Edit</button>
            <button className='centerButton'>Delete</button>
            <button className='centerButton'>New</button>
        </div>
        <button 
            className='navigateButton' 
            id='next'
            onClick={(e) => props.handleChange(props.index + 1)}    
        >Next {">"}</button>
    </div>
    )
}

export default Footer