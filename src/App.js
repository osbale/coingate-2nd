import logo from "./logo.svg";
import "./App.css";
import Navigation from "./navigation/Navigation";
import Main from "./Main";
import Background from "./images/background.svg";
import { Box } from "@mui/system";

const App = () => (
  <div className="App">
    <Box className="background" />
    <Navigation />
    <Main />
  </div>
);

export default App;
