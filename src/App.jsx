import React from 'react';
import './App.css';
import Cleanup from './components/Cleanup';
//import InfiniteLoop from './components/InfiniteLoop';
import FetchData from './components/FetchData';

const App = () => {
  return (
    <main>
     <h1>Welcome to React</h1>
     {/* <InfiniteLoop /> */}
     {/* <FetchData /> */}
     <Cleanup />
    </main>
  );
}

export default App;

