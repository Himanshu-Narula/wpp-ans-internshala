// Question 30: Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
// Answer 30:

function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}
  
function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
}
  
  // Example usage:
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];
  
fetchMultipleAPIs(apiUrls)
.then(results => {
    console.log('Combined Results:', results);
})
.catch(error => {
    console.log('Error:', error.message);
});  