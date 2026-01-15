const container = document.querySelector(".container");
let numRows = 4;

for (let i=0; i < numRows; i++) {
	const rowDiv = document.createElement("div");
	rowDiv.classList.add("rowDiv");

	for (let j=0; j < numRows; j++) {
		const gridBox = document.createElement("div");
		gridBox.classList.add("gridBox");
		rowDiv.append(gridBox);
	}
	container.append(rowDiv);
}

