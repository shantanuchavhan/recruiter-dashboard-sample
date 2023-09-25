import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import SideBar from './components/SideBar';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <MainBody />
      </div>
    </div>
  );
}

export default App;
