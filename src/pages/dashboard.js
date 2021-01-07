import React from "react";
import Cards from "../components/cards";
import ContainerChart from "../components/chartContainer";

export default function Dashboard() {
	const data = [
    {
      title: "Do",
      value: "15",
      color: "#1291e3"
    },
    {
      title: "Progress",
      value: "20",
      color: "#fcce47"
    },
    {
      title: "Done",
      value: "250",
      color: "#47c771"
    },
    {
      title: "Cancel",
      value: "50",
      color: "#e53153"
    },
  ]
	return (
		<div className="flex flex-col h-full">
			<p className="text-3xl p-5">Dashboard</p>
			<div className="h-1/5 grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-5">
				{data.map(el => <Cards key={el.title} data={el} />)}
			</div>
			<div className="h-4/5 pt-10">
				<ContainerChart />
			</div>
		</div>
	);
}