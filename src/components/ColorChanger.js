import React, { useState } from 'react';

const ColorChanger = () => {
  const [titleText, setTitleText] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setTitleText(e.target.value);
  };

  const handleClick = () => {
    if (isValidColor(titleText)) {
      setColor(titleText);
    } else {
      alert('Invalid color!');
    }
  };

  const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  };

  const titleStyle = {
    color: color,
  };

  return (
    <div>
      <h1 style={titleStyle}>{titleText}</h1>
      <input type="text" value={titleText} onChange={handleChange} />
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
