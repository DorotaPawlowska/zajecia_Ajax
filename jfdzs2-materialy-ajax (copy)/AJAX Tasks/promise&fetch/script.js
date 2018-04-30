// simplest fetch use

var ourPromise = fetch('https://randomuser.me/api');
console.log(ourPromise);

ourPromise.then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

// fetch and then returns a promise - so we can assign it to variables!
var responseFromApiPromise = fetch('https://randomuser.me/api');

var parsedJsonPromise = responseFromApiPromise.then(function(response) {
    return response.json();
});

parsedJsonPromise.then(function(data) {
    console.log(data)
    return Promise.resolve('co innego :)');
}).then(function(data) {
    console.log('PFFF', data)
});

console.log('Promisy są asynchroniczne :)');

