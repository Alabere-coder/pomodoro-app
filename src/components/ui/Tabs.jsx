import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import NavBar from "./NavBar";
import Clock from "../timer/Clock";
import AddDialog from "../timer/AddDialog";
import {
  Button,
  Dialog,
  Flex,
  TextField,
  Separator,
  DialogClose,
} from "@radix-ui/themes";
import { AiOutlineSetting } from "react-icons/ai";
import TimeSetting from "../settings/TimeSetting";
import { AiOutlinePlus } from "react-icons/ai";

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [tab2BackgroundColor, setTab2BackgroundColor] =
    useState("newBackgroundColor");

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null); // Added state for selected todo
  

  const handleInputChange = (event) => {
    event.preventDefault()
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleTabColorChange = (backgroundColor) => {
    setTab2BackgroundColor(backgroundColor);
  };

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo); // Set the clicked todo as the selected todo
  };

  return (
    <div className="flex flex-col min-h-[100%]">
      <div className="flex-grow">
        {activeTab === 1 && (
          <div>
            <NavBar />
            <div className="flex mx-4 mt-6 justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="font-[500] text-lg">Tasks</p>
                <div className="flex justify-center items-center rounded-full text-white bg-emerald-700 w-6 h-6 border">
                  <small>0</small>
                </div>
              </div>
              <div className="flex rounded-full items-center cursor-pointer text-black bg-gray-200">
                <div>
                  <Dialog.Root>
                    <Dialog.Trigger className="border border-solid">
                      <Button size="3">
                        <AiOutlinePlus className="text-black" />
                        <p className="font-[400] text-black">New Task</p>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content>
                      <Dialog.Title className="text-center">
                        Add New Task
                      </Dialog.Title>
                      <Separator size="4" />
                      <Dialog.Description my="4">
                        Add a new task to get started.
                      </Dialog.Description>

                      <label>
                        Title
                        <input
                          size="3"
                          type="text"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="w-full rounded-l py-2 px-4"
                          placeholder="Input task title"
                          required
                        />
                      </label>

                      <Button
                        onClick={handleAddTodo}
                        variant="classic"
                        color="sky"
                        size="4"
                        style={{ width: 535 }}
                        mt="6"
                        className="text-white rounded-full"
                      >
                        <AiOutlinePlus width="16" height="16" /> Add
                      </Button>

                      <Flex gap="3" justify="end">
                        <DialogClose>
                          <Button variant="soft" color="gray">
                            Close
                          </Button>
                        </DialogClose>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </div>
              </div>
            </div>
            <div>
              <ul className="mt-4">
                {todos.map((todo, index) => (
                  <li
                  onClick={() => handleTodoClick(todo)}
                    key={index}
                    className="bg-gray-200 text-gray-700 py-2 px-4 mb-2 rounded cursor-pointer"
                  >
                    {todo}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 2 && (
          <div
            className="h-screen"
            style={{ backgroundColor: tab2BackgroundColor }}
          >
            <div className="grid place-content-center">
              <Flex gap="3" py="4">
                <div className="flex ml-4 rounded-full items-center cursor-pointer text-black bg-gray-200">
                  <AddDialog />
                </div>
                <div>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button
                        to="/setting"
                        className="w-12 h-12 border mr-4 cursor-pointer bg-white text-slate-600 border-solid border-slate-600 flex items-center justify-center rounded-full"
                      >
                        <AiOutlineSetting className=" h-6 w-6" />
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: 450 }}>
                      <Dialog.Title className="text-center">
                        Time Settings
                      </Dialog.Title>
                      <Separator size="4" mb="6" />

                      <TimeSetting />
                    </Dialog.Content>
                  </Dialog.Root>
                </div>
              </Flex>
            </div>
            <Clock
              setActiveTab={setActiveTab}
              handleTabClick={handleTabClick}
              handleTabColorChange={handleTabColorChange}
            />
          </div>
        )}
        {activeTab === 3 && <div></div>}
      </div>
      {activeTab !== 2 && (
        <div className="border rounded-full flex justify-center mb-6 mx-16 bg-white drop-shadow-xl">
          <div className="p-3 text-slate-600">
            <button
              onClick={() => handleTabClick(1)}
              className={`py-2 px-6 border-t ${
                activeTab === 1 ? "bg-gray-200 text-slate-600" : "bg-white"
              } rounded-full`}
            >
              <div className="flex items-center gap-1">
                <AiOutlineHome />
                <p className="font-[500]">Home</p>
              </div>
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={`py-2 px-6 border-t ${
                activeTab === 2 ? "bg-gray-200 text-slate-600" : "bg-white"
              } rounded-full`}
            >
              <div className="flex items-center gap-1">
                <BiTime />
                <p className="font-[500]">Timer</p>
              </div>
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={`py-2 px-6 border-t ${
                activeTab === 3 ? "bg-gray-200 text-slate-600" : "bg-white"
              } rounded-full`}
            >
              <div className="flex items-center gap-1">
                <IoIosStats />
                <p className="font-[500]">Report</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
