import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLabel, VictoryTheme } from 'victory';

export default function MyBarChart() {
	const days = [
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jumat",
		"Sabtu",
		"Minggu"
	]
	const yAxis = [
		0,
		10,
		20,
		30,
		40,
		50,
		60,
		70,
		80,
		90,
		100
	]

	return (
		<VictoryChart
			width={700}
			height={500}
			domainPadding={30}
			containerComponent={<VictoryContainer responsive={true} />}
		>
			<VictoryLabel text="Task" x={650} y={50} style={{stroke: "red"}}/>
			<VictoryAxis dependentAxis
				style={{
					grid: { stroke: "#E5E7EB" },
					axis: { stroke: "transparent"},
					axisLabel: {textAlign: "right"}
				}}
				domain={[0, 100]}
				offsetX={680}
				tickValues={yAxis}
			/>
			<VictoryAxis tickFormat={x => ``} />
			<VictoryBar
				barWidth={50}
				padding={{ left: 20, right: 60 }}
				style={{ data: { fill: "red" } }}
				data={[
					{ x: "Senin", y: 0, },
					{ x: "Selasa", y: 0, },
					{ x: "Rabu", y: 0, },
					{ x: "Kamis", y: 20, },
					{ x: "Jumat", y: 0, },
					{ x: "Sabtu", y: 0, },
					{ x: "Minggu", y: 0, }
				]}
				labels={datum => `${datum.datum.x}`}
				labelComponent={<VictoryLabel y={470} verticalAnchor={"start"} />}
			/>
		</VictoryChart>
	);
}
