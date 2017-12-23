import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component{
	render(){
		const people = this.props.contacts
		return <ul>
			{people.map(count => <li key={count.name}>{count.name} is here!</li>)}
		</ul>
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>Boys</p>
        <hr/>
        <button><ContactList contacts ={[
        	{name: 'Peter'},
        	{name: 'David'}
        	]} 
        /></button>
        <hr/>
        <p>Girls</p>
        <button><ContactList contacts ={[
        	{name: 'Mandy'},
        	{name: 'Sammy'}
        	]} 
        /></button>
       </div>
    );
  }
}

export default App;
