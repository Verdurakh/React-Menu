import React from 'react';
import './App.css';
import menuData from './menuData'
import { MenuItem, getChildren } from './components/MenuItem';


function App() {
  return (
    <div className="App">
      <div>
        <MenuItem menu={getChildren(menuData.data)} />
      </div>
    </div>
  );
}


export default App;
