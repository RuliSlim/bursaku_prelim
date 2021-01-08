import React from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Task from "./pages/task";

function App() {
  const params = useParams();
  const history = useHistory();
  const [ location, setLocation ] = React.useState("");
  const [ open, setOpen ] = React.useState(false);
	
	React.useEffect(() => {
    setLocation(history.location.pathname.slice(1));
  }, [ params ])

  const handleSidebarOpen = () => {
    setOpen(!open);
  }

  const handleSidebarClose = () => {
    setOpen(false);
  }
  
  return (
    <div className="flex flex-col">
      <div className="w-screen flex flex-row" style={{height: "7vh", backgroundColor: "#6b7cfc"}}>
        <button className="p-2 block md:hidden" onClick={handleSidebarOpen}>
          <span class="material-icons">
            apps
          </span>
        </button>
      </div>
      <div className="flex flex-row h-full">
        <div className={`${ open ? "block" : "hidden"} md:block md:w-2/12 border-r-2 mr-1 border-light-blue-500 border-opacity-50`}>
          <SideBar location={location} handleSidebarClose={handleSidebarClose}/>
        </div>
        <div className="md:w-10/12 p-5 w-screen h-full border-l-2 border-light-blue-500 border-opacity-50">
          <Route exact path="/" component={() => <Dashboard />} />
          <Route path="/task" component={() => <Task />} />
        </div>
      </div>
    </div>
  );
}

export default App;
