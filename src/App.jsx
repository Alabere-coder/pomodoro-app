import { Container, Card, Flex } from "@radix-ui/themes";
import Tabs from "./components/ui/Tabs";
import NavBar from "./components/ui/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Setting"
import Home from "./pages/Home";

function App() {
  return (
    
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="setting" element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
