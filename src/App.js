import React from "react";
import Cards from "./components/cards";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-screen" style={{height: "7vh", backgroundColor: "#6b7cfc"}}></div>
      <div className="flex flex-row h-screen">
        <div className="hidden md:block md:w-2/12 border-r-4 border-light-blue-500 border-opacity-50">
          <SideBar />
        </div>
        <div className="md:w-10/12 p-5">
          <div className="flex flex-col">
            <p className="text-3xl p-5">Dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-5">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
