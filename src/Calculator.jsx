
import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div className="display">{display}</div>
      <div className="buttons">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="C" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
