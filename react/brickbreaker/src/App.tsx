import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrickBreaker } from './BrickBreaker/BrickBreaker';

/**
 * Outer container for multiple games in tabs
 * 
 * @returns new App
 */
export function App() {
  return (
    <div className="App">
     <BrickBreaker/>
    </div>
  );
}
