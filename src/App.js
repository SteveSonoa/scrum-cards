import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
        <h1 className="title">Team Vertex</h1>
        <h1 className="title">Scrum Cards</h1>
        <List />
    </div>
  );
}

export default App;
