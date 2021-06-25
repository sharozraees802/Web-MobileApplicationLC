// protoype



//with out prototype
// function Student(name,roll){
//     this.name = name
//     this.roll = roll
//     this.getname = function(){
//         return this.name
//     }
// }

// var student1 = new Student("sharoz",9852)
// var student2 = new Student("Hassan",9827)
// console.log(student1.getname())
// console.log(student1)
// console.log(student2)



// with prototpe

// function Student(name,roll){
//     this.name = name
//     this.roll = roll

// }

// Student.prototype.getname = function(){
//     return this.name
// }

// var student1 = new Student("sharoz",9852)
// var student2 = new Student("Hassan",9827)
// console.log(student1.getname())
// console.log(student1)
// console.log(student2)
// console.log(student2.getname)


// check property

// var student1 = {
//     name:"sharoz",
//     rollnumber:9852
// }

// console.log("rollnumber" in student1)
// console.log("roll" in student1)




// access all property

// var student1 = {
//     name:"sharoz",
//     rollnumber:9852,
//     uniname:"PAF-KIET"
// }



// for(var props in student1){
//     console.log(props)
// }






// access all property values

// var student1 = {
//     name:"sharoz",
//     rollnumber:9852,
//     uniname:"PAF-KIET"
// }



// for(var key in student1){
//     console.log(student1[key])
// }



//check property hasOwnProperty

// var student1 = {
//     name:"sharoz",
//     rollnumber:9852
// }

// console.log(student1.hasOwnProperty("roll"))
// console.log(student1.hasOwnProperty("rollnumber"))




//  hasOwnProperty srf object ki define property ko check kary ga

//  in object ki property k sath jo javascript ki property unko bhee check kary ga

/*

*  DATA BASE START


*/




function saveData() {

    var name = document.getElementById("Name")

    var roll = document.getElementById("Roll")

    // var student = {
    //     name : name.value,
    //     roll : roll.value
    // }

    // firebase.database().ref('/')
    // firebase.database().ref('student').set(student)
    // firebase.database().ref('student').child('student1').set(student)
    // firebase.database().ref('student/student1').set(student)


    // firebase.database().ref('student').push(student)


    // firebase.database().ref('student').child('student1').push(student)
    // firebase.database().ref('student').child('student1/today').push(student)

    // var key = Math.random() * 23232323;
    // firebase.database().ref('student/' + key).set(student)
    // firebase.database().ref('student/' + key.toFixed()).set(student)


    // var key = firebase.database().ref('student').push().key

    // console.log(key)


    // key ko object me save kr rhy hain

    var key = firebase.database().ref('student').push().key

    var student = {
        name : name.value,
        roll : roll.value,
        key:key
    }
    firebase.database().ref('student/' + key).set(student)



    //console.log(student)
}


// console.log(firebase.database)


function getfirebasedata() {


    // once  one time data lykr ata page refresh page

    // on realtime pe lykr ata h without refresh page


    //     firebase.database().ref('student').once('value',function(data){

    // // console.log(data)
    // console.log(data.val())


    //     })


    // firebase.database().ref('student/-McxnHMYfQTkz-nxhqkP').once('value', function (data) {

    //     // console.log(data)
    //     console.log(data.val())


    // })



    firebase.database().ref('student').on('child_added', function (data) {

        console.log(data.val())


    })


}
getfirebasedata()


function deletedatafirebase() {

    // student object delete
    // firebase.database().ref('student').remove()
    
    // only one key delete
    // firebase.database().ref('student/-McxnHMYfQTkz-nxhqkP').remove()
}


deletedatafirebase()



function editfirebasedata(){

    firebase.database().ref('student/-McxnHMYfQTkz-nxhqkP').set({
key:'-McxnHMYfQTkz-nxhqkP',
name:'sharoz',
roll:9852
    })

}
editfirebasedata()














