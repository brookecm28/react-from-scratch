import React, {Component} from 'react'
import people from '../data'
import Footer from './Footer'
import PersonList from './PersonList'


class PersonContainer extends Component {
    constructor () {
        super ()
        this.state = {
            currentIndex: 1,
        }
        this.handleChangeIndex = this.handleChangeIndex.bind(this)
    }

    handleChangeIndex(newIndex) {
        if (newIndex < 1) {
            this.setState ({
                currentIndex: 25
            })
        } else if (newIndex > 25) {
            this.setState ({
                currentIndex: 1
            })
        } else {
            this.setState ({
                currentIndex: newIndex
            })
        }
    }

    render() {
        return (
          <div className='container'> 
            <PersonList people={people} index={this.state.currentIndex} />
            <Footer index={this.state.currentIndex} handleChange={this.handleChangeIndex} />
          </div>
         
        )
    }
}

export default PersonContainer