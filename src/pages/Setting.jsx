import { AiOutlineLeft } from "react-icons/ai";
import { Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import TimeLength from "../components/settings/TimeLength";

const Settings = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[40%] border-x-2 border-slate-300 px-6">
        <div className="h-[4rem] w-[36%] fixed top-0 z-10 backdrop-blur-sm bg-white/30">
          <Flex align="center" gap="2" mt="4">
            <div className="h-10 w-10 hover:mr-2 border border-slate-400 rounded-full flex items-center justify-center">
              <Link to="/">
                <AiOutlineLeft className="text-[20px] font-bold" />
              </Link>
            </div>
            <Text size="4" weight="medium" color="gray">
              Settings
            </Text>
          </Flex>
        </div>
        <TimeLength />
      </div>
    </div>
  );
};

export default Settings;
