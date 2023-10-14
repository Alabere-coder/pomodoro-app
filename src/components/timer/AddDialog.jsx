import {
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Separator,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { BiTask } from "react-icons/bi";

const AddDialog = () => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger style={{ width: 400 }}>
          <Button className="flex w-[30%] text-black/75 justify-between">
            <BiTask className="h-5 w-5" />
            <AiOutlineDown className="h-5 w-5" />
          </Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to your profile.
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default AddDialog;
