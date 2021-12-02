import { FC } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeProvider";
import "./general.css";

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
