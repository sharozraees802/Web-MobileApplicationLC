// OBJECT 

// var webcourse = {
//     t:"sharoz",
//     s:"sahil",
//     s1:"kehkashan"
// }



//  console.log(webcourse)

// var array = ["sharoz","sahil","kehkashan"]
// console.log(array)


// webcourse.s2 = "talha"

//console.log(webcourse)

//  delete webcourse.s1

// webcourse.course = ["Daa","E2"]

// console.log(webcourse)


//console.log(webcourse.course[1])


//  webcourse.tools = {}

//  webcourse.tools.pen1 = "pen"


// webcourse.tools1 = []

// webcourse.tools1[0] = "zxcxzc"
// webcourse.tools1[1]="sddce"


// console.log(webcourse)


// var answer = "t" in webcourse

// console.log(answer)





// var question  = [

//     {
//         Question:"what is your name",
//         Answer:{
//             a:"sharoz",
//             b:"sahil",
//             c:"Kehkashan"
//         },
//         CorrectAnswer: "C"
//     }
//     ,
//     {
//         Question:"what is your age",
//         Answer:{
//             a:20,
//             b:22,
//             c:25
//         },
//         CorrectAnswer: "b"
//     }
// ]









// array of object
// python dictonary
// 

// var question = [
//     {
//         Q1:"what is your name",

//         answer:{
//             a:"sahil",
//             b:"Sheroz",
//             c:"kehkashan"
//         },

//         correctAnswer:"c"
//     }
//     ,
//     {
//         Q2:"What is your age",
//         answer:[20,25,36],
//         answer1:{
//             a:20,
//             b:22,
//             c:23
//         },
//         correctanswer:"c"
//     }
// ]

















// constructor function

// function Course(t1,s2,s3){

// this.t1 = t1
// this.s2 = s2
// this.s3 = s3


// }


// function Course(t1,s2,s3){

//     this.t = t1
//     this.s = s2
//     this.s = s3


//     }

// var abc = new Course("sharoz","Kehkashan","Sahil")

// console.log(abc)






// function Course(t1,s1,s2){

//     this.t1 = t1
//     this.s1 = s1
//     this.s2 = s2

// }

// function Course(t1,s1,s2){
//     this.a = t1
//     this.b = s1
//     this.c = s2
// }

// var zxc = new Course("sharoz","sahil","kehkashan")
// console.log(zxc)




function Plan(name, price, space, transfer, pages) {
    this.n = name;
    this.pr = price;
    this.s = space;
    this.t = transfer;
    this.p = pages;
}


var plan1 = new Plan("Basic", 3.99, 100, 1000, 10)
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50)
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500)

console.log(plan1)
console.log(plan2)
console.log(plan3)