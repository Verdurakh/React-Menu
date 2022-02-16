import React from 'react';
import './App.css';
import menuData from './menuData'
import { MenuItem, getChildren } from './components/MenuItem';
import Accordion from 'react-bootstrap/Accordion'


function App() {
  return (
    <Accordion className='Menu' alwaysOpen={true}
      onSelect={(e) => {
        if (e && e.length > 0)
          console.log(e[e.length - 1]);
      }}>
      <MenuItem menu={getChildren(menuData.data)} />
    </Accordion>

  );
}


export default App;
