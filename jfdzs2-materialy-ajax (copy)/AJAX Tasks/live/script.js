// var isMomHappy = true;
//
//
// var showOff = function (phone) {
//     var message = 'i have new phone -> ' + phone.color + ' ' + phone.brand;
//     return new Promise(
//         function (resolved, rejected) {
//             resolved(message);
//         }
//     )
// }
//
// var willGetNewPhone = new Promise(
//     function (resolve, rejected) {
//         if(isMomHappy){
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         }else {
//             var reason = new Error('mom is not happy');
//             rejected(reason);
//         }
//     }
// );
//
// var askMom = function () {
//     console.log('befor asking mom');
//     willGetNewPhone
//         .then(showOff)
//     .then(function (fulified) {
//         console.log(fulified);
//     })
//     .catch(function (error) {
//         console.log(error.message);
//     })
//     console.log('after asking mom');
//
// }
//
// askMom();
//
// fetch('https://randomuser.me/api')
//     .then(function(response) {
//         return response.json()   //<- it also returns a promise
//     }).then(function(data) {
//         console.log(data);
//     });
//


var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});

var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});

var p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000, 'three');
});

var p4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 4000, 'four');
});

var p5 = new Promise(function (resolve, reject) {
    setTimeout(reject, 2500, 'reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values)
}).catch(reason => {
    console.log(reason)
});























