import React from 'react';
import logo from './logo.svg';
import './App.css';
import { reverse } from 'dns';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: 80, paddingLeft: 30, color: 'white'}}>
            Peerfund
        </p> 
        <p style={{fontSize: 50, color: 'white'}}> Stop letting banks control your life.<br/> Join the revolution.</p>
        <p style={{fontSize: 30, paddingBottom: 30, color: 'white', paddingTop: '10%'}}>
            Find out more!
        </p>
      </header>
      <div className="App-what-we-do">
        <p style={{fontSize: 40, paddingTop: 20, color: 'black', paddingLeft: 30}}>
          What we do:
        </p>
        <p>
          Peerfund is the first ever personal bond marketplace.
        </p>
        <div className="App-explanation-boxes-container">
          <div className="App-explanation-box">
            <p style={{paddingTop: '60%'}}> A borrower asks for a loan with their own given terms</p>
          </div>
          <div className="App-explanation-box">
            <p style={{paddingTop: '60%'}}> Lenders choose to buy portions of that loan as bonds</p>
          </div>
          <div className="App-explanation-box">
            <p style={{paddingTop: '60%'}}> Lenders are then able to trade the bonds, or wait to be paid back</p>
          </div>
        </div>
        {/* <div className="App-start-now">
          <p style={{fontSize: 40, color: 'white'}}>Start now!</p>
        </div> */}
      </div>
    </div>
  );
}



export default App;
