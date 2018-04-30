//
// var div = document.createElement('div');
//
// div.style.position = 'fixed';
// div.style.top = '0px';
// div.style.left = '20px';
// div.style.width = '20px';
// div.style.height = '20px';
// div.style.background = 'red';
//
// document.body.appendChild(div);
//
// var interval = setInterval(
//     function () {
//         var currentPosY = parseInt(div.style.top.slice(0, -2));
//         div.style.top = currentPosY+1+'px';
//         if(currentPosY > (window.innerHeight/2)){
//             // clearInterval(interval);
//             // div.remove();
//             div.style.top= '0px';
//         }
//     }
// );
//
// console.log('wekwjhekwjherkjwherkjh');


var p1 = new Promise(function (resolve, reject) {
    fetch('http://cors-proxy.htmldriven.com/?url=https://loripsum.net/api')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setTimeout(resolve, 1000, data);
        })
        .catch(function (error) {
            reject(error);
        })
    });

var p3 = new Promise(function (resolve, reject) {
        fetch('http://cors-proxy.htmldriven.com/?url=https://loripsum.net/api')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setTimeout(resolve, 2000, data);
            })
            .catch(function (error) {
                reject(error);
            })
    });

var p2 = new Promise(function (resolve, reject) {

    fetch('https://randomuser.me/api')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setTimeout(resolve, 3000, data);
        })
        .catch(function (error) {
            reject(error);
        })
});

var p4 = new Promise(function (resolve, reject) {
    fetch('https://randomuser.me/api')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setTimeout(resolve, 4000, data);
        })
        .catch(function (error) {
            reject(error);
        })
});

Promise.all([p1,p2,p3,p4])
    .then(function(values){

        values.forEach(function (t) {
            console.log(t);
            if(t.body){
                var loremIpsum = t.body;
                var element = document.createElement('div');
                var data = document.querySelector('.user-data');//.innerHTML = userDataTemplate;
                element.innerHTML = loremIpsum;
                data.appendChild(element);
            }else{
                var result = t.results[0];
                var userDataTemplate = ''
                    +'<img src="' + result.picture.large + '" alt="userphoto"/>'
                    +'<p>Name: '+ result.name.first +'</p>'
                    +'<p>Cell phone: '+ result.cell +'</p>'
                    +'<p>e-mail: '+ result.email +'</p>';

                var element = document.createElement('div');

                element.innerHTML = userDataTemplate;

                var data = document.querySelector('.user-data'); //.innerHTML = userDataTemplate;
                data.appendChild(element);
            }
        })
}).catch(function(reason){
    console.log(reason)
});




