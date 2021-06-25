// setInterval => repeatively running



// setInterval(function(){
// console.log("runner")
// },1000)

// function timer(){
//     console.log("hello")
// }
// setInterval(timer,1000)





// setTimeeout => after sometime 

// setTimeout(function(){
// console.log("settimeout")
// },10000)

// function timeout(){
//     console.log("out")
// }
// setTimeout(timeout,3000)


// var count = 0

// var interval;


// function timer(){
//     count++
//     console.log(count)
// }

// interval = setInterval(timer,1000)

// setTimeout(function(){

// clearInterval(interval)

// },10000)


var min = 0
var sec = 0
var msec = 0

var minheading = document.getElementById('min')

var secheading = document.getElementById("sec")

var msecheading = document.getElementById("msec")

var startbtn = document.getElementById("start")

var interval;


function timer(){

    msec ++
    msecheading.innerHTML = msec

    if (msec >= 100) {
        sec ++
        secheading.innerHTML = sec
        msec = 0
    }
    else if(sec >= 60){
        min ++
        sec = 0
        minheading.innerHTML = min
    }



}

function start(){

    interval = setInterval(timer,10)

    startbtn.disabled = true
    
}

function stop(){

clearInterval(interval)

startbtn.disabled = false

}


function reset(){
    msec = 0
    sec = 0
    min = 0

    msecheading.innerHTML = msec
    secheading.innerHTML = sec
    minheading.innerHTML = min

    stop()

    startbtn.disabled = false

}











