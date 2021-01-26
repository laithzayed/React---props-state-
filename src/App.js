import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Laith Zayed', work: 'Full Stack Developer' },
      { name: 'Mohamed Salah', work: 'Football Player' },
      { name: 'CR7', work: 'Football Profisional player' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Laith Zayed';
    this.setState( {
      persons: [
        { name: newName, work: 'Web & Mobile Developer' },
        { name: 'Embabe', work: 'Football in Paris San German' },
        { name: 'Pelay', work: 'Retired' }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Laith', work: 'AI Developer & Scientist ' },
        { name: event.target.value, work: 'stay Tuned' },
        { name: 'Roney', work: 'Football old player' }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Task #2</h1>
        <p>Start!</p>
        <button class="btn2" onClick={() => this.switchNameHandler('Laith>>>>>>>Zayed')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].work} 
          changed={this.nameChangedHandler} >|| Location: Amman, Jordan ||</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].work}
          click={this.switchNameHandler.bind(this, 'Laith!')}
          changed={this.nameChangedHandler} >|| Location: Madrid, Spain ||</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].work}
           changed={this.nameChangedHandler} >|| Location: AnyWhere, Earth ||</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
