import "./App.css";
import Navigation from "./navigation/Navigation";
import Main from "./content/Main";
import { Box } from "@mui/system";

const App = () => (
  <div className="App">
    <Box className="background" />
    <Navigation />
    <Main />
  </div>
);

export default App;
