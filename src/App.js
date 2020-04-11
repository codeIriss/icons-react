import React from 'react';
import {IconContext} from 'react-icons';
import { FaReact} from 'react-icons/fa';
import {MdAlarm} from 'react-icons/md';
import './App.css';

function App() {
  return (
    <IconContext.Provider value={{color: 'blue', size: '5rem'}}>
    <div className="App">
    <h1 style={{display:'flex',justifyContent:'center'}}>This is how we use Icons in React</h1>
       <FaReact />
       <MdAlarm />
    </div>
    </IconContext.Provider>
      );
}

export default App;


//suppose we want to use the same size and color at mant position in our app then defining them individually is a tedious task so we can use react-icon IconContext 