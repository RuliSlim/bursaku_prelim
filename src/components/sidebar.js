import React from "react";

export default function SideBar() {
	return (
		<React.Fragment>
			<div className="flex flex-col pt-6">
				<div className="px-5 py-5">
					<p className="text-gray-500 text-3xl">Menu</p>
				</div>
				<div style={{color: "blueviolet"}}>
					<button className="grid grid-cols-6 grid-flow-row gap-2 bg-gray-100 h-14 px-5 blue content-center">
						<span className="material-icons">apps</span>
						<span>Dashboard</span>
					</button>
				</div>
				<div >
					<button className="grid grid-cols-6 grid-flow-row gap-2 h-14 px-5 content-center">
						<span className="material-icons">list</span>
						<span>Tasks</span>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}