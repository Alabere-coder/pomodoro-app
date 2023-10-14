import { Card, Flex, Text, Button, Select } from "@radix-ui/themes";

const Period = () => {
  return (
    <div>
      <div>
        <Text color="gray" weight="medium" size="3" ml="3">
          Time Length
        </Text>
        <Card className="bg-slate-100" size="3" mt="2">
          <Flex gap="3" align="center" justify="between" pb="6">
            <Text color="gray" weight="bold" size="3">
              Focus Session
            </Text>
            <Select.Root defaultValue="3">
              <Select.Trigger variant="classic" />
              <Select.Content position="popper" variant="soft">
                <Select.Item value="1">15 Minutes</Select.Item>
                <Select.Item value="2">20 Minutes</Select.Item>
                <Select.Item value="3">35 Minutes</Select.Item>
                <Select.Item value="4">40 Minutes</Select.Item>
                <Select.Item value="5">55 Minutes</Select.Item>
                <Select.Item value="6">70 Minutes</Select.Item>
                <Select.Item value="7">90 Minutes</Select.Item>
                <Select.Item value="8">120 Minutes</Select.Item>
                <Select.Item value="9">150 Minutes</Select.Item>
                <Select.Item value="10">180 Minutes</Select.Item>
                <Select.Item value="11">200 Minutes</Select.Item>
                <Select.Item value="12">260 Minutes</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex gap="3" align="center" justify="between">
            <Text color="gray" weight="bold" size="3">
              Short Break
            </Text>
            <Button variant="soft">10 Minutes</Button>
          </Flex>
          <Flex gap="3" align="center" justify="between" pt="6">
            <Text color="gray" weight="bold" size="3">
              Long Break
            </Text>
            <Button variant="soft">15 Minutes</Button>
          </Flex>
        </Card>
      </div>

      <div className="my-8">
        <Text color="gray" weight="medium" size="3" ml="3">
          Focus Session
        </Text>
        <Card className="bg-slate-100" size="3" mt="2">
          <Flex align="center" justify="between">
            <Text color="gray" weight="bold" size="3">
              Sessions Per Round
            </Text>
            <Button variant="soft">4 Sessions</Button>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default Period;
