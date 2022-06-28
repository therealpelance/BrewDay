import React from 'react';
import Navbar from './features/Navbar/Navbar';
import NearMe from './pages/NearMe/NearMe';
import Search from './pages/Search/Search';
import Cities from './pages/Cities/Cities';
// import Planner from './pages/Planner/Planner';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          {/* <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span> */}
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<NearMe />} />
            <Route path='/search' element={<Search />} />
            <Route path='/cities' element={<Cities />} />
            {/* <Route path='/planner' element={<Planner />} /> */}
          </Routes>
        </main>
        <footer className='App-footer'>
          <div>
            <p>Data courtesy of The Beer Mapping Project</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
