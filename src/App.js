import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import Main from "./Main";
import Background from "./images/background.svg";
import { Box } from "@mui/system";

const App = () => (
  <div
    className="App"
    style={{
      height: "100vh",
      width: "100vw",
    }}
  >
    <Box className="background" />
    <Navigation />
    <Main />
  </div>
);

export default App;
