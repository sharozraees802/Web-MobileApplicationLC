

// var plan1 = {

//     cal : function(){
//         return 2+1
//     }
// }


// function Student(name,roll){
//     this.name = name,
//     this.roll = roll,
//     this.getname = function(){
//         return this.name
//     }
// }


// var std = new Student("Kehkashan",9825)
// var std1 = new Student("Sahil",9870)

// console.log(std)
// console.log(std1)



// function Student(name,roll){
//     this.name = name,
//     this.roll = roll

// }

// Student.prototype.getname = function(){
//     return this.name
// }


// var std = new Student("Sahil",9870)
// var std1 = new Student("kehkashan",9825)
// console.log(std.getname())
// console.log(std1.getname())


// var struden = {

//     name:"sahil",
//     roll:9870,
//     uniname:"PAF-KIET"

// }

// check property in object
// console.log("rollnumber" in struden)
// console.log("roll" in struden)

// access all key

// for(var pro in struden){
//     console.log(pro)
// }

// access all value in object


// for(var i in struden){

//     console.log(struden[i])
// }


// all key in object or by  default key access
// console.log("constructor" in struden)

// only objecct key access
// console.log(struden.hasOwnProperty('rollnumber'))







function SaveData(){
    var name = document.getElementById("Name")
    var roll = document.getElementById("Roll")

    // var Student = {
    //     Name : name.value,
    //     RollNumber : roll.value
    // }

//   firebase.database().ref('/')
//   firebase.database().ref('Student').set(Student)
    //  firebase.database().ref('Student').child('Student1').set(Student)
    //  firebase.database().ref('Student/Student1').set(Student)

    // firebase.database().ref('Student').push(Student)
    // firebase.database().ref('Student').child('Student1/Today').push(Student)
    // firebase.database().ref('Student').push(Student)

//   var key = Math.random() * 23234454562

// error Code
// firebase.database().ref('Student/' + key).set(Student)

    // firebase.database().ref('Student/' + key.toFixed()).set(Student)

    var key = firebase.database().ref('Student').push(Student).key

    // console.log(key)
    var Student = {
        Name : name.value,
        RollNumber : roll.value,
        Key:key
    }

firebase.database().ref('Student/' + key).set(Student)



    alert("datasave")

    name.value = ''
    roll.value = ''


}



function getdatavalue(){

 // once  one time data lykr ata page refresh page

// on realtime pe lykr ata h without refresh page

// firebase.database().ref('Student').once("value",function(data){

//     // console.log(data)
//     console.log(data.val())

// })


firebase.database().ref('Student').on("child_added",function(data){

        
        console.log(data.val())
    
    })

// searching

// firebase.database().ref('Student/-MdmDaqRK2lqmBpTawLQ').once('value', function (data) {

//         console.log(data.val())


//     })



}

getdatavalue()



function firebasedatadelete(){

    // only one key delete
    // firebase.database().ref('Student/-MdmDaqRK2lqmBpTawLQ').remove()

    // student object delete
    
    // firebase.database().ref('Student').remove()
}


firebasedatadelete()



function editfirebasedata(){

    firebase.database().ref('Student/-MdmGJ7B1EugP-YIFv9U').set({
        Key:'-MdmGJ7B1EugP-YIFv9U',
        Name: 'Sahil Nanwani',
        RollNumber: 9870
    })

}
editfirebasedata()