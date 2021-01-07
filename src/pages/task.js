import React from "react";
import NewTask from "../components/modalNewTask";
import MyTable from "../components/table";

export default function Task() {
	const data = [
		{
			"No Task": "000001",
			Tanggal: "20 September 2020",
			Jam: "07.10 PM",
			Pekerjaan: "Monitoring Gudang",
			File: "laporan1.xlsx",
			Action: "Do"
		},
		{
			"No Task": "000001",
			Tanggal: "20 September 2020",
			Jam: "07.10 PM",
			Pekerjaan: "Monitoring Gudang",
			File: "laporan1.xlsx",
			Action: "Done"
		},
		{
			"No Task": "000001",
			Tanggal: "20 September 2020",
			Jam: "07.10 PM",
			Pekerjaan: "Monitoring Gudang",
			File: "laporan1.xlsx",
			Action: "Progress"
		},
		{
			"No Task": "000001",
			Tanggal: "20 September 2020",
			Jam: "07.10 PM",
			Pekerjaan: "Monitoring Gudang",
			File: "laporan1.xlsx",
			Action: "Cancel"
		},
	]

	const [ isOpen, setIsOpen ] = React.useState(false);
	const handleClick = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return(
		<div className="flex flex-col h-screen p-5">
			<div className="flex flex-row w-full justify-between items-center">
				<p className="text-3xl p-5">Task</p>
				<button className="bg-blue-500 w-30 lg:w-40 h-12 flex items-center p-2 rounded-xl" onClick={handleClick}>
					<div className="flex flex-row items-center justify-between w-full">
						<p className="p-5 text-white">Add Task</p>
						<span class="material-icons text-white mr-2">add</span>
					</div>
				</button>
			</div>
			<div className="">
				<MyTable data={data}/>
			</div>
			{isOpen && <NewTask handleClose={handleClose}/>}
		</div>
	);
}