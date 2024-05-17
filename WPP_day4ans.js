// Question 4: Write a JavaScript program to calculate the days left before Christmas.

// Answer 4:

function daysUntilChristmas() {
    // Get today's date
    const today = new Date();

    // Get the current year
    const currentYear = today.getFullYear();
    
    // Christmas date for the current year (December 25)
    const christmasDate = new Date(currentYear, 11, 25); // Note: Month is zero-based index (0 for January)
    
    // Check if Christmas has already passed for this year
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmasDate.setFullYear(currentYear + 1); // If Christmas has passed, set it to next year
    }

    // Calculate the difference in milliseconds between today and Christmas
    const differenceMs = christmasDate - today;
    
    // Convert milliseconds to days
    const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    
    return daysLeft;
}

// Example usage
const daysLeft = daysUntilChristmas();
console.log("Days left until Christmas:", daysLeft);