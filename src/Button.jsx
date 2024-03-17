// src/components/Button.js
import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
};

export default Button;
