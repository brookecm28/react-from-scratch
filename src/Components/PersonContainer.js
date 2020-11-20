import React, {Component} from 'react'
import people from '../data'
import Footer from './Footer'
// import PersonList from './Components/PersonList.js'


class PersonContainer extends Component {
    constructor () {
        super ()
        this.state = {
            currentIndex: 0,
        }
        // this.handleChangeIndex = this.handleChnageIndex.bind(this)
    }

    // handleChangeIndex(newIndex) {
    //     this.setState ({
    //         currentIndex: newIndex
    //     })
    // }

    render() {
        return (
          <div className='container'> 
            <div className='bodyContainer'>
            <div className='mainDisplay'>
                <div className='leftSide'>
                    <p className='personName'>hola</p>
                    <p className='info'>Info1</p>
                    <p className='info'>Info2</p>
                    <p className='info'>Info3</p>
                    <ol className='favorites'>Favorite Movies:
                        <li className='listItem'></li> {/* will display the array of faves */}
                    </ol>
                </div>
                <div className='rightSide'>
                    <div className='personNumber'>Number{"/"}25</div>        
                    
                </div>  {/* will need to have fixed position and will need to keep track of the array's index & display "(index + 1) / 25" */ }
            </div>
            <Footer />
            </div>
          </div> 
        )
    }
}

export default PersonContainer