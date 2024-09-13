// PREVENT PAGE RELOADING 
let form = document.querySelector('form[name="calcForm"]'); // Update the form name here
form.addEventListener('submit', function (p) {
    p.preventDefault();
});

// HISTORY CODE 

// Initialize an empty array to store the calculation history.
const calHistory = [];

// Function to add a calculation to the history.
function addToHistory(calculation) {
    calHistory.push(calculation);
}

// Function to display the history when the "History" button is clicked.
function showHistory() {
    const historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.innerHTML = '';

    if (calHistory.length === 0) {
        historyDisplay.innerHTML = 'No calculation history yet.';
    } else {
        calHistory.forEach((calculation, index) => {
            historyDisplay.innerHTML += `<p>Line ${index + 1}: ${calculation}</p>`;
        });
    }
}

// Update your existing calculation function to add the calculation to the history.
// function calculate() {
//     const result = eval(calcForm.screen.value);
//     calcForm.screen.value = result;
//     // addToHistory(`${calcForm.screen.value}`);
//     addToHistory(result);
// }
// function calculate() {
//     const expression = calcForm.screen.value;
//     const result = eval(expression);
//     const roundedResult = result.toFixed(4); // Limit to 4 decimal places
//     const fullCalculation = `${expression} = ${roundedResult}`;
//     calcForm.screen.value = roundedResult;
//     addToHistory(fullCalculation);
// }

// SHOWING DECIMAL ONLY IN FRACTION: 

function calculate() {
    const expression = calcForm.screen.value;
    const result = eval(expression);

    let roundedResult;
    if (Number.isInteger(result)) {
        roundedResult = result; // Keep the result as an integer
    } else {
        roundedResult = result.toFixed(4); // Limit to 4 decimal places for fractions
    }

    const fullCalculation = `${expression} = ${roundedResult}`;
    calcForm.screen.value = roundedResult;
    addToHistory(fullCalculation);
}

// CODE TO CALCULATE WHEN YOU HIT 'ENTER' ON KEYBOARD:

// Get the input field by its id
const inputField = document.getElementById('screen');

// Add an event listener for the Enter key press
inputField.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        calculate(); // Trigger the calculation when Enter is pressed
    }
});

// function test() {
//     alert('JavaScript file loaded'); // This will show an alert when the file is loaded
// }
