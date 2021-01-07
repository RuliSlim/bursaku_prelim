import React from "react";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Task from "./pages/task";

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-screen" style={{height: "7vh", backgroundColor: "#6b7cfc"}}></div>
      <div className="flex flex-row h-full">
        <div className="hidden md:block md:w-2/12 border-r-2 mr-1 border-light-blue-500 border-opacity-50">
          <SideBar />
        </div>
        <div className="md:w-10/12 p-5 w-screen h-full border-l-2 border-light-blue-500 border-opacity-50">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
