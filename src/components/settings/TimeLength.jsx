import {
  Card,
  Flex,
  Avatar,
  Box,
  Text,
  Button,
  Switch,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import TimeSetting from "./TimeSetting";

const TimeLength = () => {
  return (
    <div className="mt-20">
      <div>
        <TimeSetting />
      </div>

      <div>
        <Text color="gray" weight="medium" size="3" ml="3">Theme</Text>
        <Card className="bg-slate-100" size="3" mt="2">
          <Flex align="center" justify="between">
            <Text color="gray" weight="bold" size="3">Dark Mode</Text>
            <Switch defaultChecked />
          </Flex>
        </Card>
      </div>

      <div className="my-8">
        <Text color="gray" weight="medium" size="3" ml="3">Focus Session</Text>
        <Card className="bg-slate-100 " size="3" mt="2">
          <Flex direction="column" gap="4" className="text-[15px]" >
            <Link className="font-[30px]">About Pomoro</Link>
            <Link>Support & Feedbacks</Link>
            <Link>Report Bugs</Link>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default TimeLength;
