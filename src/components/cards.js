import React from "react";

export default function Cards({data}) {
	return (
		<div className="flex flex-col p-10 w-100 h-100 rounded-xl border-1 shadow-md border-light-blue-500 border-opacity-50"
			style={{backgroundColor: data.color}}
		>
			<p className="text-3xl text-white">{data.title}</p>
			<div className="flex flex-row w-full justify-end items-end">
				<p className="text-3xl text-white w-4/12">{data.value}</p>
				<p className="text-white w-8/12">Task</p>
			</div>
		</div>
	);
}