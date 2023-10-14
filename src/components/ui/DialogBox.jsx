import {
  Dialog,
  Button,
  Inset,
  TextField,
  DialogClose,
  Flex,
  Separator,
  TextArea
} from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";


const DialogBox = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };


  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger className="border border-solid">
          <Button size="3">
            <AiOutlinePlus className="text-black" />
            <p className="font-[400] text-black">New Task</p>
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title className="text-center">Add New Task</Dialog.Title>
          <Separator size="4" />
          <Dialog.Description my="4">
            Add a new task to get started.
          </Dialog.Description>
          
            <label>Title
            <TextField.Input
                size="3"
                type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-l py-2 px-4"
                placeholder="Input task title"
            />
            </label>
                
            <Button onClick={handleAddTodo} variant="classic" color="sky" size="4" style={{ width: 535}} mt="6" className="text-white rounded-full">
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
      <div>
      <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="bg-gray-200 text-gray-700 py-2 px-4 mb-2 rounded">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DialogBox;
