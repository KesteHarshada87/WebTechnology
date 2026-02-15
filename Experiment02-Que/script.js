// Array to store student names
let students = [];

// Function to add student
function addStudent() {
    
    // Get input value
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    // Add name to array
    students.push(name);

    // Clear input field
    document.getElementById("studentName").value = "";

    // Display updated list
    displayStudents();
}

// Function to display students
function displayStudents() {

    let list = document.getElementById("studentList");
    list.innerHTML = "";  // Clear previous list

    // Loop through array
    for (let i = 0; i < students.length; i++) {
        let li = document.createElement("li");
        li.textContent = students[i];
        list.appendChild(li);
    }
}

// Event Listener
document.getElementById("addBtn").addEventListener("click", addStudent);
