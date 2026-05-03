const output = document.getElementById("output");

// Array to store marks
let marks = [];

// Function to add mark
function addMark() {

    let mark = Number(document.getElementById("markInput").value);

    if (mark === "" || isNaN(mark)) {
        alert("Please enter a valid number");
        return;
    }

    marks.push(mark);

    document.getElementById("markInput").value = "";

    console.log("Mark Added:", mark);
    console.log("Current Marks Array:", marks);

    output.innerHTML = "Marks Entered: " + marks.join(", ");
}

// Function to calculate average
function calculateAverage() {

    if (marks.length === 0) {
        alert("No marks entered");
        return;
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let average = sum / marks.length;

    output.innerHTML += "<br>Average Marks: " + average;

    console.log("Average Marks:", average);
}