import React, { useState } from 'react';

const TimerModes = ({ timerModes, handleModeChange }) => {
  const [selectedMode, setSelectedMode] = useState('work');

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    handleModeChange(mode, timerModes[mode]);
  };

  return (
    <div>
      {Object.keys(timerModes).map((mode) => (
        <button
          key={mode}
          onClick={() => handleModeSelection(mode)}
          style={{
            backgroundColor: selectedMode === mode ? '#A5D6A7' : 'white',
            padding: '5px 10px',
            margin: '5px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};

export default TimerModes;