const container = document.querySelector(".container");
let numRows = 16;

// Create a grid of numRows x numRows for initial page
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

function hoverOver(event) {
	const gridBox = event.target.closest(".gridBox");

	if (!gridBox) return;

	if (gridBox.contains(event.relatedTarget)) return;

	gridBox.style.backgroundColor = 'black';
	//console.log("Moved into box");
}


container.addEventListener("mouseover", hoverOver);


