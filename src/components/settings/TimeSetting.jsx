import { Card, Flex, Text, Button, TextField } from "@radix-ui/themes";
import { useState } from "react";


const TimeSetting = () => {
  

  const [newTimer, setNewTimer] = useState({
    work: 2.0,
    short: 3.1,
    long: 3.5,
    active: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  return (
    <div>
      <form noValidate>
        <Text color="gray" weight="medium" size="3" ml="3">
          Time Length
        </Text>
        <Card className="bg-slate-100" size="3" mt="2">
          <Flex gap="3" align="center" justify="between" pb="6">
            <Text color="gray" weight="bold" size="3">
              Focus Session
            </Text>
            <TextField.Input type="text" name="work" onChange={handleChange} value={newTimer.work} />
          </Flex>
          <Flex gap="3" align="center" justify="between">
            <Text color="gray" weight="bold" size="3">
              Short Break
            </Text>
            <TextField.Input
              type="text"
              name="shortBreak"
              onChange={handleChange}
              value={newTimer.short}
            />
          </Flex>
          <Flex gap="3" align="center" justify="between" pt="6">
            <Text color="gray" weight="bold" size="3">
              Long Break
            </Text>
            <TextField.Input
              type="text"
              name="longBreak"
              onChange={handleChange}
              value={newTimer.long}
            />
          </Flex>
        </Card>
    
      </form>

      <div className="my-8">
        <Text color="gray" weight="medium" size="3" ml="3">
          Focus Session
        </Text>
        <Card className="bg-slate-100" size="3" mt="2">
          <Flex align="center" justify="between">
            <Text color="gray" weight="bold" size="3">
              Sessions Per Round
            </Text>
            <Button type="submit" variant="soft">
              4 Sessions
            </Button>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default TimeSetting;
