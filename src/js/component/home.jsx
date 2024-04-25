import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const [colors, setColors] = useState(["red", "yellow", "green"]);
	const [intervalId, setIntervalId] = useState(null);
	const [purple, setPurple] = useState(false);

	useEffect(() => {
		if (intervalId !== null) {
			clearInterval(intervalId);
			const id = setInterval(changeColor, 1000);
			setIntervalId(id);
		}
	}, [colors]);

	const changeColor = () => {
		setSelectedColor(currentColor => {
			const currentIndex = colors.indexOf(currentColor);
			if (currentColor === colors.length - 1) {
				return purple ? "purple" : colors[0];
			} else {
				return colors[currentIndex + 1];
			}
		});
	};

	const toggleInterval = () => {
		if (intervalId) {
			clearIntervalId(intervalId);
			setIntervalId(null);
		} else {
			const id = setInterval(changeColor, 1000);
			setIntervalId(id);
		}
	};

	const togglePurple = () => {
		setPurple(!purple);
		if (!purple) {
			setColors(prevColors => [...prevColors, "purple"]);
		} else {
			setColors(prevColors => prevColors.filter(color => color !== "purple"));
		}
	};


	return (

		<div className="fondo">
			<div className="text-center mt-5">
				<div className={purple ? "contenedorSemaforoPurple" : "contenedorSemaforo"}>
					{colors.map(color => (
						<div
							key={color}
							onClick={() => setSelectedColor(color)}
							className={`light${color.charAt(0).toUpperCase() + color.slice(1)}` + (selectedColor === color ? " glow" : "")}
						/>
					))}
				</div>
				<button onClick={togglePurple}>{purple ? "Quitar color" : "Agregar color"}</button>
				<button onClick={toggleInterval}>Encender semáforo</button>
			</div>
		</div>
	);
};

export default Home;
