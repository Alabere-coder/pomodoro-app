import React from 'react';

const TimeSelect = ({ value, onChange }) => {
  const options = [
    { label: '10 mins', value: 10 },
    { label: '20 mins', value: 20 },
    { label: '25 mins', value: 25 },
    { label: '30 mins', value: 30 },
  ];

  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TimeSelect;
