import "./App.css";
import "./index.css";
import Layout from "./components/layout";
import { useState } from "react";
import { fitpeoData } from "./components/api/Data";
import { DataProvider } from "./components/hooks";

function App() {
  const [apidata, setApidata] = useState(fitpeoData);
  return (
    <DataProvider>
      <div className="w-full h-screen bg-secondaryclr">
        <Layout />
      </div>
    </DataProvider>
  );
}

export default App;
