// setInterval => repeatively running
// setTimeeout => after sometime 



// setInterval(function(){
//    console.log("running..")

// },1000)

// function timer(){
// console.log("running..")
// }
// setInterval(timer,1000)

// 1000 milisecond = 1second





// function timeout() {
//     console.log("ruuner")
// }

// setTimeout(timeout,3000)

// setTimeout(function(){
//     console.log('timmeout')
// },2000)







//how stop setinterval


// var count = 0;

// var interval;

// function timer(){
//     count++
//     console.log(count)
// }
// interval = setInterval(timer,1000)

// setTimeout(function(){

//     clearInterval(interval)

// },5000)



// msec =100
// seco =60





var min  = 0
var sec =  0
var msec = 0

var minheading = document.getElementById('min')
var secheading = document.getElementById('sec')
var msecheading = document.getElementById('msec')
var sbtn = document.getElementById('start')


var interval;

function timer(){

    msec++
    msecheading.innerHTML=msec;
    if (msec >= 100) {
        sec++
        secheading.innerHTML = sec
        msec = 0
    }
    else if ( sec >= 60){
        min ++
        sec = 0
        minheading.innerHTML = min
    }
}

function start(){

    interval = setInterval(timer,10)
    sbtn.disabled = true

}


function stop(){
    clearInterval(interval)
    sbtn.disabled = false
     
}


function reset(){

    min = 0 
    sec = 0
    msec = 0
    sbtn.disabled = false
    msecheading.innerHTML = msec
    secheading.innerHTML = sec
    minheading.innerHTML = min
    stop()
    


}




























