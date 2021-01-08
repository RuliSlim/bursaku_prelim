import React from "react";
import MyBarChart from "../component/barChart";
import PieChart from "./pieChart";

export default function ContainerChart() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 h-full w-full">
			<div className="flex flex-col border-1 shadow-md rounded-xl border-light-blue-500 border-opacity-50">
				<div className="p-10 flex flex-col w-full">
					<div className="flex flex-row justify-between w-full">
						<p className="text-3xl">Data task</p>
						<p className="text-3xl md:text-4xl">20</p>
					</div>
					<div className="flex flex-col md:flex-row justify-between w-full">
						<div className="flex flex-col lg:flex-row w-60 lg:justify-around">
							<p>Periode</p>
							<select id="cars" name="cars" className="border-2 border-blue-500 border-opacity-100 mx-2 h-8">
								<option value="volvo">Hari ini</option>
								<option value="saab">Saab</option>
								<option value="fiat">Fiat</option>
								<option value="audi">Audi</option>
							</select>
							<select id="cars" name="cars" className="border-2 border-blue-500 border-opacity-100 h-8">
								<option value="volvo">Progress</option>
								<option value="saab">Saab</option>
								<option value="fiat">Fiat</option>
								<option value="audi">Audi</option>
							</select>
						</div>
						<p className="text-sm">Diperbaharui beberapa menit lalu</p>
					</div>
				</div>
				<MyBarChart />
				<button>
					<p className="pl-10 pb-5 mt-2 text-blue-300">Lihat lebih lengkap &#62; </p>
				</button>
			</div>
			<div className="flex flex-col border-1 shadow-md rounded-xl border-light-blue-500 border-opacity-50">
				<div className="p-10 flex flex-col w-full">
					<div className="flex flex-row justify-between w-full">
						<p className="text-3xl">Data task</p>
					</div>
					<div className="flex flex-col md:flex-row justify-between w-full">
						<div className="flex flex-row ">
							<p>Periode</p>
							<select id="cars" name="cars" className="border-2 border-blue-500 border-opacity-100 mx-2">
								<option value="volvo">Bulan ini</option>
								<option value="saab">Saab</option>
								<option value="fiat">Fiat</option>
								<option value="audi">Audi</option>
							</select>
						</div>
						<p className="text-sm">Diperbaharui beberapa menit lalu</p>
					</div>
				</div>
				<PieChart />
				<button>
					<p className="pl-10 pb-5 mt-2 text-blue-300">Lihat lebih lengkap &#62; </p>
				</button>
			</div>
		</div>
	);
}