import React, { Component } from 'react';
import Lunch from './components/Lunch';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lunches: [
        {
          id: 1,
          restaurantName: 'Duza Miha',
          time: '12:30',
          users: [
            'Arsen', 'Karol', 'Adam', 'Lenny'
          ]
        },
        {
          id: 2,
          restaurantName: 'Kwardans',
          time: '13:30',
          users: [
            'Michał', 'Marta'
          ]
        }
      ]
    }
  }



  render() {
    return (
      <div className="main-page">
        {
          this.state.lunches.map((lunch) => {
            return <Lunch lunch={lunch} />
          })
        }
      </div>
    )
  }
}

export default App;
