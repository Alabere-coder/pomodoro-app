import React, { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const Clock = ({ setActiveTab, handleTabColorChange, newBackgroundColor }) => {
  const [mode, setMode] = useState("work");
  const [completedCycles, setCompletedCycles] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("newBackgroundColor");
 

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const returnToFirstTab = () => {
    handleTabClick(1);
  };

  const changeMode = () => {
    let newMode, newBackgroundColor;
    if (mode === "work") {
      newMode = "shortBreak";
      newBackgroundColor = "#F0E68C";
    } else if (mode === "shortBreak") {
      newMode = "longBreak";
      newBackgroundColor = "#32CD32";
    } else {
      newMode = "work";
      setCompletedCycles(completedCycles + 1);
      newBackgroundColor = "#AFEEEE";
    }
    setMode(newMode);
    
    handleTabColorChange(newBackgroundColor);
  };

  const timerModes = {
    work: 300,
    shortBreak: 10,
    longBreak: 5,
  };

  const [isRunning, setIsRunning] = useState(false);
  const [showResetTimer, setShowResetTimer] = useState(false);
  const initialTime = timerModes[mode];
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(timerModes[mode]);
  }, [mode]);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      switchMode();
    }
    return () => clearInterval(interval);
  }, [time, isRunning, mode]);

  const startTimer = () => {
    setIsRunning(true);
    setShowResetTimer(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setShowResetTimer(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(timerModes[mode]);
    setShowResetTimer(false);
  };

  const switchMode = () => {
    if (mode === "work") {
      setMode("shortBreak");
      setTime(timerModes["shortBreak"]);
    } else if (mode === "shortBreak") {
      setMode("longBreak");
      setTime(timerModes["longBreak"]);
    } else {
      setMode("work");
      setTime(timerModes["work"]);
    }
  };

  function getTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }



  return (
    <div
      style={{ backgroundColor }}
      className=" flex flex-col items-center justify-center mt-20"
    >
        
      <div>
        <p className="text-[1.6rem] font-bold">{mode}</p>
      </div>
      <div className="py-8">
        <p>Completed Cycles: {completedCycles}</p>
      </div>
      <div>
        <p className="text-[90px] font-bold">{getTime(time)}</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="flex gap-4">
        <Button size="4" style={{width: 100}} className="rounded-full" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button size="4" style={{width: 100}} className="rounded-full" onClick={changeMode}>
          <FaAngleDoubleRight className="h-10 w-10"/>
          <p>Skip</p>
        </Button>
        </div>
        {showResetTimer && ( 
          <Button size="4" style={{ width: 150 }} className="rounded-full" onClick={resetTimer}>
            End Session
          </Button>
        )}
      </div>
      
        <div className="flex justify-center gap-2 items-center mt-14">
        <div onClick={returnToFirstTab} className="h-10 w-10 hover:mr-2 hover:bg-transparent bg-white border border-slate-400 rounded-full flex items-center justify-center">
          <Link to="/">
            <AiOutlineLeft className="text-[25px] font-black" />
          </Link>
        </div>
        <p className="font-bold">Back</p>
        </div>
      
    </div>
  );
};

export default Clock;
