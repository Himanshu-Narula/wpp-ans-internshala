// Question 1: Write a JavaScript program to display the current day and time in the following format.

// Sample Output : 

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Answer 1:

function getCurrentDayAndTime() {
    // Array of days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get current date and time
    const now = new Date();
    
    // Get day of the week
    const day = days[now.getDay()];
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Format the time
    const timeString = `${hours} ${ampm} : ${minutes} : ${seconds}`;
    
    // Display the day and time
    console.log(`Today is: ${day}.`);
    console.log(`Current time is: ${timeString}.`);
}

// Call the function to display current day and time
getCurrentDayAndTime();
