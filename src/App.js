import { Button } from "@chakra-ui/react";
import "./App.css";
import { useTheme } from "next-themes";

function App() {
  const { resolvedTheme, setTheme } = useTheme()
  setTheme("light")
    return (
    <>

    </>
  );
}

export default App;
