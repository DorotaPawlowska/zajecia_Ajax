var div = document.createElement('div')

div.style.position = 'fixed'
div.style.top = '0px'
div.style.left = '0px'
div.style.width = '20px'
div.style.height = '20px'
div.style.backgroundColor = "red"

document.body.appendChild(div)

var intervalID = setInterval(
    function(){
        var currentPosY = parseInt(div.style.top.slice(0,-2))
        div.style.top = currentPosY + 1 + 'px'
        if(currentPosY > (window.innerHeight)){
            clearInterval(intervalID)
            div.remove()
        }
    },
    10
)

console.log('whatever')