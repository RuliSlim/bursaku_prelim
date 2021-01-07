import React from 'react';
import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLabel, VictoryPie, VictoryTheme } from 'victory';

export default function PieChart() {
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
		<>
			<VictoryPie
				data={[
					{ x: "Progress", y: 25, },
					{ x: "Do", y: 25, },
					{ x: "Cancel", y: 15, },
					{ x: "Done", y: 45, },
				]}
				style={{
					data: {
						boxShadow: "5px 10px",
						// border: "blue"
						// fill: "red",
						filter: "drop-shadow(10px 0 5px red)",
						// filter: "url('#dropshadow')"
					},
					// parent: {
					// 	filter: "drop-shadow(10px 0 5px red)"
					// }
				}}
				radius={(props) => {
					console.log(props,"<<<<<<")
					if (props.datum._x % 2 !== 0) {
						return 150 + 5
					} else {
						return 150
					}
				}}
				startAngle={-70}
				colorScale={["#fcce47", "#1291e3", "#e03357", "#47c771" ]}
				labels={datum => `${datum.datum.x} \n ${datum.datum.y}%`}
				labelRadius={({innerRadius}) => innerRadius + 105}
				// labelComponent={<VictoryLabel y={0} verticalAnchor={"middle"} />}
			/>
		</>
	);
}
