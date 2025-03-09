// I. Code Transformation
// I.1 Convert the following Conditional Statement into Conditional Ternary:
// A
let age = 18;
let genAverage = 83;

let ternary = age >= 18 && genAverage >= 83 ? "You may enter College, under BSCS Program"
            : "Both conditions may have not met and not allowed to enroll";

console.log(ternary);

// B
let subject = "DSA";
let grade = 80;

let ternary2 = subject === "DSA" && grade >= 80 ? "You may enroll Application Development"
            : subject === "Math101" && grade <= 80 ? "You may enroll Calculus"
            : "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus";

console.log(ternary2);

// I.2 Convert the following Conditional Ternary into Regular Conditional Statement:
if (age >= 18) {
    console.log("You may now Register as a Voter for Elections 2025");
} else {
    console.log("You are too young to register as a voter for Elections 2025");
}

if (genAverage >= 85) {
    console.log("You may enroll in all Course Programs");
} else if (genAverage < 85 && genAverage > 82) {
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
    console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}

// I.3 Convert the following for loop into while loop:
let fname = "Jose Cruz";
let i = 0; // Initialization

while (i < fname.length) { // Condition
    let c = 2 + i;
    let nLengthCounterTwo = fname.length - c;
    
    console.log(fname);
    console.log("Iterations Name was Printed: " + i);
    
    i++;
}

// II. Code Snippet
// Ask for user input
let registeredUsername = prompt("Register your Username: "); 
let registeredPassword = prompt("Register your passcode: "); 
let reEnteredPassword = prompt("Re-enter your passcode: "); 

if (registeredPassword === reEnteredPassword) { // compare password and re-entered password
    alert("Congratulations! You have successfully registered."); // 

    let enteredUsername = prompt("Username: "); // prompt for entered username

    if (enteredUsername === registeredUsername) { // Compare registered and entered username
        let enteredPassword = prompt("Password: "); // If correct username, prompt for password

        (enteredPassword === registeredPassword) // Compare registered and entered password
            ? alert("Welcome to DSA, " + registeredUsername) // Window pop-up for successful login
            : alert("Incorrect Password, Re-run the code!"); // Window pop-up for incorrect password

    } else {
        alert("Incorrect Username, Re-run the code!"); // Window pop-up for incorrect username
    }

} else {
    alert("Password does not Match, Re-run the code!"); // Window pop-up for password mismatch
}

// III. Coding Problem
// Ask for user input
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let Age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");


// Calculate the number of iterations (1/4 of Age input)
let iterations = parseInt(Age / 4); 

// Conditional statement for Course
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
    
    // Conditional statement for Class Role
    if (classRole === "Officer" || classRole === "Student" || classRole === "Teacher") {
        
        // Loop statement to print name based on 1/4 of Age
        for (let i = 0; i < iterations; i++) {
            console.log("Iteration " + (i + 1) + ": " + name);
        }

    } else {
        console.log("Invalid Class Role. Default role assigned.");
    }

} else {
    console.log("Invalid Course. Please enter BSCS, BSM, or BAEL.");
}
