import "./App.css";
import "./index.css";
import Layout from "./components/layout";

import { DataProvider } from "./components/hooks";

function App() {
  
  return (
    <DataProvider>
      <div className="w-full h-screen bg-secondaryclr">
        <Layout />
      </div>
    </DataProvider>
  );
}

export default App;
