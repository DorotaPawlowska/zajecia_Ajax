
var promise = new Promise(function (resolve, reject) { // nowy promise
    fetch('https://randomuser.me/api') // ajaxowe połączenie z api
        .then(function (response) {
            return response.json() // parsowanie z formatu json do obiektu javascript
        }).then(function (data) {
            resolve(data);
        }).catch(function () {
            reject(error);
        })
});

promise.then(function (data) {
    console.log(data);
});


