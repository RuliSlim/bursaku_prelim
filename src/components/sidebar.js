import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({location, handleSidebarClose}) {

	return (
		<React.Fragment>
			<div className="flex flex-col pt-6">
				<div className="px-5 py-5">
					<p className="text-gray-500 text-3xl">Menu</p>
				</div>
				<div style={{color: location === "" ? "blueviolet" : ""}} onClick={handleSidebarClose}>
					<Link className={`grid grid-cols-6 grid-flow-row gap-2 h-14 px-5 blue content-center ${location === "" ? "bg-gray-100" : ""}`} to="/">
						<span className="material-icons">apps</span>
						<span>Dashboard</span>
					</Link>
				</div>
				<div style={{color: location === "task" ? "blueviolet" : ""}} onClick={handleSidebarClose}>
					<Link className={`grid grid-cols-6 grid-flow-row gap-2 h-14 px-5 content-center ${location === "task" ? "bg-gray-100" : ""}`} to="task">
						<span className="material-icons">list</span>
						<span>Tasks</span>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}