import React from 'react';
import logo from './logo.svg';

import React, { Component } from 'react';
import StudyApp from './components/flashcards/StudyApp';

import './App.css';

<<<<<<< HEAD:src/App.js
import './bootstrap.css'


class App extends Component {
 
  render() {

    return (
      <div className="App">
        <StudyApp />
      </div>
    );
  }
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> 6142b54dc7c4e31f79372269e1e01a9a38beffd6:src/App.tsx
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
