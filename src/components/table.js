import React from "react";

export default function MyTable({data}) {
	return (
		<div className="overflow-auto w-full">
			<table className="w-full" style={{minWidth: 750}}>
				<CreateTitle data={data[0]} />
				<CreateBody data={data} />
			</table>
		</div>
	)
}

function CreateTitle({data}) {
	const key = Object.keys(data);
	return (
		<thead className="w-full text-center">
			<tr className={`lg:grid lg:grid-cols-8 w-full`}>
				{key.map((el, i) => <th className={`${i === 0 ? "border-l-2" : ""} ${i === key.length - 1 ? "col-span-2" : ""} border-b-2 py-4 border-t-2 border-r-2 border-black border-opacity-10`} key={el}>{el}</th>)}
			</tr>
		</thead>
	);
}

function CreateBody({data}) {
	const key = Object.keys(data[0]);
	// const value = Object.values()
	return (
		<tbody className="w-full text-center">
			{data.map((el, i) => (
				<tr key={i} className={`lg:grid lg:grid-cols-8 w-full`}>
					{Object.values(el).map((val, i) => (
						(i === key.length - 1)
						? <td td key={val} className={`${i === 0 ? "border-l-2" : ""} col-span-2 border-b-2 border-r-2 border-black border-opacity-10 px-4 py-2`}>
								<CreateOption action={val} />
							</td>
						: <td key={val} className={`${i === 0 ? "border-l-2" : ""}  border-b-2 border-r-2 border-black border-opacity-10 py-2`}>{val}</td>
					))}
				</tr>
			))}
		</tbody>
	)
}

function CreateOption({action}) {
	const option = [
    {
      title: "Do",
      color: "#1291e3"
    },
    {
      title: "Progress",
      color: "#fcce47"
    },
    {
      title: "Done",
      color: "#47c771"
    },
    {
      title: "Cancel",
      color: "#e53153"
    },
	]

	const id = option.find(el => el.title === action);
	return (
		<div className="w-full flex flex-row justify-between">
			<select id="select" name="cars" className="rounded-full py-1 w-full px-2" style={{backgroundColor: id.color}} value={action}>
				{option.map((el, i) => <option value={el.title} key={`${el.title} ${i}`} >{el.title}</option>)}
			</select>
			<span className="material-icons">
				keyboard_arrow_down
			</span>
		</div>
	)
}