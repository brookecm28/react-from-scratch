import React, {Component} from 'react'

class PersonList extends Component {
    constructor() {
        super()
        // this.state = {
        //     index: 0
        // }
    }

    render () {
        console.log(this.props.people[0].name.first)
        let mappedPeople = this.props.people.map((e, i, arr) => {
            if (this.props.index === i + 1) {
                console.log(e.name.first)
                return (
                    <div className='bodyContainer'>
                        <div className='mainDisplay'>
                        <div className='leftSide' key={i}>
                            <p className='personName'>{`${e.name.first} ${e.name.last}`}</p>
                            <div className='needs-bold'>
                                <p className='info'>From:</p>
                                <p>{` ${e.city}, ${e.country}`}</p>
                            </div>
                            <div className='needs-bold'>
                                <p className='info'>Job Title:</p>
                                <p>{` ${e.title}`}</p>
                            </div>
                            <div className='needs-bold'>
                                <p className='info'>Employer:</p>
                                <p>{`${e.employer}`}</p>
                            </div>
                            <ol className='favorites'>Favorite Movies:
                                <li className='listItem'>{e.favoriteMovies[0]}</li>
                                <li className='listItem'>{e.favoriteMovies[1]}</li>
                                <li className='listItem'>{e.favoriteMovies[2]}</li>
                            </ol>
                        </div>
                        <div className='rightSide'>
                        <div className='personNumber'>{`${this.props.index}/`}25</div>
                        
                        </div>  {/* will need to have fixed position and will need to keep track of the array's index & display "(index + 1) / 25" */ }
                        </div>
                    </div>
                )
            } else {
                return null
            }
        })

        return (
            <div className='list-container'>
                {mappedPeople}
            </div>
        )
    }
}

export default PersonList