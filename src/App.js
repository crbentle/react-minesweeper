import React from 'react';
import './App.css';
import Tile from './Tile.js'

function App() {
  return (
    <div className="App">
      <Tile status='unknown' mines={1}  />
      <Tile status='cleared' mines={0}  />
      <Tile status='cleared' mines={1}  />
      <Tile status='cleared' mines={2}  />
      <Tile status='cleared' mines={3}  />
      <Tile status='cleared' mines={4}  />
      <Tile status='cleared' mines={5}  />
      <Tile status='cleared' mines={6}  />
      <Tile status='cleared' mines={7}  />
      <Tile status='cleared' mines={8}  />
    </div>
  );
}

export default App;
