// Question 28: Write a JavaScript program to convert an asynchronous function to return a promise.
// Answer 28:

// Example asynchronous function
async function fetchData() {
    // Simulating an asynchronous operation (e.g., fetching data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated data
            const data = { id: 1, name: 'John Doe', age: 30 };
            resolve(data);  // Resolve the promise with data
        }, 1000);  // Simulating delay with setTimeout
    });
}

// Converting the async function to return a promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        fetchData().then(data => {
            resolve(data);  // Resolve the outer promise with the fetched data
        }).catch(error => {
            reject(error);  // Propagate any errors to the outer promise
        });
    });
}

// Usage example
fetchDataPromise().then(data => {
    console.log('Fetched data:', data);
}).catch(error => {
    console.error('Error fetching data:', error);
});