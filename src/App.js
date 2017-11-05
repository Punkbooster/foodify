import React, { Component } from 'react'
import Lunch from './components/Lunch'
import AddLunch from './components/AddLunch'
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA3EBYrBGYf0o8mQOKZXo3HXvGZi-9nZcI',
  authDomain: 'foodify-9c3b3.firebaseapp.com',
  databaseURL: 'https://foodify-9c3b3.firebaseio.com',
  projectId: 'foodify-9c3b3',
  storageBucket: 'foodify-9c3b3.appspot.com',
  messagingSenderId: '1052425333601'
}
firebase.initializeApp(config)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lunches: [],
      speed: 10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')

    // whenever data is changed in the firebase database listener
    // sets state to new data
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })


    fetch('/lunches.json')
      .then(response => response.json())
      .then(lunches => this.setState({ lunches }))
  }

  removeLunch = (id) => {
    this.setState({
      lunches: this.state.lunches.filter(lunch => lunch.id !== id )
    })
  }

  render() {
    return (
      <div className="main-page">
        <h1>{this.state.speed}</h1>
        <nav className="navbar navbar-inverse bg-primary">
          <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <AddLunch />

        {
          this.state.lunches.map((lunch) => {
            return <Lunch lunch={lunch} onRemoveClick={this.removeLunch} />
          })
        }
      </div>
    )
  }
}

export default App;
