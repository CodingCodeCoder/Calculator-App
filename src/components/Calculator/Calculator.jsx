import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operation, setOperation] = useState(0);
  const [total, setTotal] = useState(0);
  const [equationHistory, setEquationHistory] = useState('');

  const handleNumberClick = (number) => {
    if (displayValue === 0) {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue.toString() + number);
    }
    setTotal(0);
  };

  const handleOperatorClick = (operator) => {
    // Logic to handle operator click
    if (operator === "+"){
      setMemory(displayValue);
      setOperation("+");
      setDisplayValue(0);
    } else if (operator === "-"){
      setMemory(displayValue);
      setOperation("-");
      setDisplayValue(0);
    } else if (operator === "x"){
      setMemory(displayValue);
      setOperation("x");
      setDisplayValue(0);
    } else if (operator === "/"){
      setMemory(displayValue);
      setOperation("/");
      setDisplayValue(0);
    }
  };

  const handleEqualClick = () => {
    if (operation === "+") {
      const result = parseFloat(memory) + parseFloat(displayValue);
      setDisplayValue(0);
      setMemory(0);
      setTotal(result);
      setEquationHistory(`${memory} + ${displayValue} = ${result}`);
    } else if (operation === "-") {
      const result = parseFloat(memory) - parseFloat(displayValue);
      setDisplayValue(0);
      setMemory(0);
      setTotal(result);
      setEquationHistory(`${memory} - ${displayValue} = ${result}`);
    } else if (operation === "x") {
      const result = parseFloat(memory) * parseFloat(displayValue);
      setDisplayValue(0);
      setMemory(0);
      setTotal(result);
      setEquationHistory(`${memory} x ${displayValue} = ${result}`);
    } else if (operation === "/") {
      const result = parseFloat(memory) / parseFloat(displayValue);
      setDisplayValue(0);
      setMemory(0);
      setTotal(result);
      setEquationHistory(`${memory} / ${displayValue} = ${result}`);
    }
  };
  
  const handleClearClick = () => {
    setDisplayValue(0);
    setMemory(0);
    setTotal(0);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="display">{memory}</div>
      <div className="display">{total}</div>
      <div className="keypad">
      <div className="row">
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('1')}>1</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('2')}>2</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('3')}>3</button>
          </div>
          <div className="column">
            <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
          </div>
      </div>
      <div className="row">
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('4')}>4</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('5')}>5</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('6')}>6</button>
          </div>
          <div className="column">
            <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
          </div>
        
      </div>
        <div className="row">
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('7')}>7</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('8')}>8</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('9')}>9</button>
          </div>
          <div className="column">
            <button className="operator" onClick={() => handleOperatorClick('x')}>x</button>
          </div>
        </div>
        
        
        <div className="row">
          <div className="column">
            <button className="clear" onClick={handleClearClick}>C</button>
          </div>
          <div className="column">
            <button className="number" onClick={() => handleNumberClick('0')}>0</button>
          </div>
          <div className="column">
            <button className="equal" onClick={handleEqualClick}>=</button>
          </div>
          <div className="column">
            <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
          </div>
        </div>
      </div>
      <div className="history">{equationHistory}</div>
    </div>
  );
};


export default Calculator;
