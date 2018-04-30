
var p1 = fetch('https://randomuser.me/api').then(function (response) {
        return response.json()
    })
    .catch(function () {
        reject(error);
    });


var p2 = fetch('https://randomuser.me/api').then(function (response) {
        return response.json()
    })
    .catch(function () {
        reject(error);
    });

Promise.all([p1,p2]).then(values => {
    console.log(values)
}).catch(reason => {
    console.log(reason)
});