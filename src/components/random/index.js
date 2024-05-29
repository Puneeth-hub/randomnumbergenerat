import React, { useState } from 'react';
import './index.css';


const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};


const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};


const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};


const getRandomSymbol = () => {
  const symbols = '!@#$%^&*()_+{}:"<>?|[];,./`~';
  return symbols[Math.floor(Math.random() * symbols.length)];
};


const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const PasswordGenerator = () => {
  
  const [randomValue, setRandomValue] = useState('');

  
  const handleClick = (type) => {
    const generatedValue = randomFun[type]();
    setRandomValue(generatedValue);
  };

  return (
    <div className="container">
      <h2 className='heading'>Password Generator</h2>
      <div className="button-container">
        <button className="btn" onClick={() => handleClick('lower')}>Generate Lowercase Letter</button>
        <button className="btn" onClick={() => handleClick('upper')}>Generate Uppercase Letter</button>
        <button className="btn" onClick={() => handleClick('number')}>Generate Number</button>
        <button className="btn" onClick={() => handleClick('symbol')}>Generate Symbol</button>
      </div>
      <p className='paragraph'>Generated Value: {randomValue}</p>
    </div>
  );
};

export default PasswordGenerator;
