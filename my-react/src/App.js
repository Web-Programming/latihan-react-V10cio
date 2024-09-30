// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Suspense fallback={<div>Loading ....</div>}>
      <div className='App'>
        <h1>Universitas MDP</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/product">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Registasi</a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <div className='main container'>
          <Routes>
            {
              Routes.map((route, i)=>{
                const {path, Component} = route;
                return <Route key ={i} path = {path} element = {<Component />} />;
              })
            }
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;