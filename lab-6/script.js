// Function to compute sum of cubes when button is clicked
document.getElementById("sumButton").addEventListener("click", function() {
    let input = document.getElementById("numberInput").value;

    if (input.trim() === "") {
        document.getElementById("sumOutput").textContent = "Please enter some numbers!";
        return;
    }

    let arr = input.split(",").map(num => parseFloat(num.trim()));

    if (arr.some(isNaN)) {
        document.getElementById("sumOutput").textContent = "Invalid input. Please enter numbers only.";
        return;
    }

    let sumOfCubes = arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    document.getElementById("sumOutput").textContent = "Sum of Cubes: " + sumOfCubes;
});

// Script to show last modified date
var x = document.lastModified;
document.getElementById('lastModified').textContent = x;
