import React from 'react'

function Footer () {
    return (
    <div className='allButtons'>
        <button className='navigateButton' id='previous'>{"<"} Previous</button>
        <div>
            <button className='centerButton'>Edit</button>
            <button className='centerButton'>Delete</button>
            <button className='centerButton'>New</button>
        </div>
        <button className='navigateButton' id='next'>Next {">"}</button>
    </div>
    )
}

export default Footer