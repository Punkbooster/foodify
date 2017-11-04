import React, { Component } from 'react';
import Lunch from './components/Lunch';
import AddLunch from './components/AddLunch';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lunches: []
    }
  }

  componentDidMount() {
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
