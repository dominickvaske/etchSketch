const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear");
const newSize = document.querySelector(".newSize");
let size = 16;

// Create a grid of numRows x numRows for initial page
function drawGrid(size = 16) {
	container.innerHTML = '';
	for (let i=0; i < size; i++) {
		const rowDiv = document.createElement("div");
		rowDiv.classList.add("rowDiv");

		for (let j=0; j < size; j++) {
			const gridBox = document.createElement("div");
			gridBox.classList.add("gridBox");
			rowDiv.append(gridBox);
		}
		container.append(rowDiv);
	}
}


function hoverOver(event) {
	const gridBox = event.target.closest(".gridBox");

	if (!gridBox) return;

	if (gridBox.contains(event.relatedTarget)) return;

	gridBox.style.backgroundColor = 'black';
	//console.log("Moved into box");
}


function newGrid(event) {
	size = parseInt(prompt("Please input a new size between 2 and 100: "))

	while (size < 2 || size > 100) {
		size = parseInt(prompt("Invalid size. Please input a new size between 2 and 100: "));
	}
	drawGrid(size);
}


container.addEventListener("mouseover", hoverOver);

clearBtn.addEventListener("click", () => {
	drawGrid(size)
});

newSize.addEventListener("click", newGrid);

drawGrid();


