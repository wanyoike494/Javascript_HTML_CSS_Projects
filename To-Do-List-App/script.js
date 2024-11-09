const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Create delete button (span)
        let span = document.createElement("span");
        span.textContent = 'X';
        span.style.cursor = 'pointer'; // Make the cursor a pointer
        span.style.marginLeft = '10px'; // Add some space between task and 'X'

        // Function to delete the list item when 'X' is clicked
        span.onclick = function() {
            li.remove(); // Remove the list item
        };

        li.appendChild(span);
        listContainer.appendChild(li);

        // Function to toggle strikethrough on clicking the list item
        li.onclick = function() {
            li.classList.toggle("checked"); // Toggle 'checked' class
        };

        inputBox.value = ''; // Clear the input box
    }
}

// Optional: This code could go at the bottom of your script to add the 'addTask' function to a button click event
document.querySelector('button').onclick = addTask;