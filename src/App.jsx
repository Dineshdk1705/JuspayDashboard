import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </Router>
  );
};

export default App;
