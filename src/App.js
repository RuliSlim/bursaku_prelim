import React from "react";
import Cards from "./components/cards";
import ContainerChart from "./components/chartContainer";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-screen" style={{height: "7vh", backgroundColor: "#6b7cfc"}}></div>
      <div className="flex flex-row">
        <div className="hidden md:block md:w-2/12 border-r-2 mr-1 border-light-blue-500 border-opacity-50">
          <SideBar />
        </div>
        <div className="md:w-10/12 p-5 w-screen h-full border-l-2 border-light-blue-500 border-opacity-50">
          <div className="flex flex-col h-full">
            <p className="text-3xl p-5">Dashboard</p>
            <div className="h-1/5 grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-5">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="h-4/5 pt-10">
              <ContainerChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
