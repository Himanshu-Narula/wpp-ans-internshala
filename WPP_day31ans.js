// Question 31: Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
// Answer 31:

async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    // Set timeout for aborting the fetch request
    const timeoutId = setTimeout(() => {
        controller.abort();
        console.log('Fetch request timed out');
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        clearTimeout(timeoutId); // Clear timeout if request succeeds
        return data;
    } catch (error) {
        clearTimeout(timeoutId); // Clear timeout if request fails
        console.error('Fetch error:', error);
        throw error; // Rethrow the error
    }
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/4';
const timeoutInMs = 5000; // Timeout in milliseconds (5 seconds)

fetchDataWithTimeout(apiUrl, timeoutInMs)
    .then(data => {
        console.log('Data received:', data);
        // Process the data here
    })
    .catch(error => {
        console.error('Request failed:', error);
        // Handle errors here
    });