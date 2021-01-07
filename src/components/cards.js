import React from "react";

export default function Cards() {
	return (
		<div className="flex flex-col p-10 bg-blue-600 w-100 h-100 rounded-xl border-1 shadow-md border-light-blue-500 border-opacity-50">
			<p>Do</p>
			<div className="flex flex-row">
				<p>15</p>
				<p>Task</p>
			</div>
		</div>
	);
}