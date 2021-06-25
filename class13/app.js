

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

    var Student = {
        Name:name.value,
        RollNumber:roll.value
    }

    // console.log(Student)
    // console.log(firebase.database())

    firebase.database().ref('student').set(Student)

    alert("datasave")

    name.value = ''
    roll.value = ''


}