var isMomHappy = true;


var showOff = function (phone) {
    var message = 'i have new phone -> ' + phone.color + ' ' + phone.brand;
    return new Promise(
        function (resolved, rejected) {
            resolved(message);
        }
    )
}

var willGetNewPhone = new Promise(
    function (resolve, rejected) {
        if(isMomHappy){
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        }else {
            var reason = new Error('mom is not happy');
            rejected(reason);
        }
    }
);

var askMom = function () {
    console.log('befor asking mom');
    willGetNewPhone
        .then(showOff)
    .then(function (fulified) {
        console.log(fulified);
    })
    .catch(function (error) {
        console.log(error.message);
    })
    console.log('after asking mom');

}

askMom();
