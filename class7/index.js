/* for(var i =0 ; i<20;i++){
     console.log(i)
 }


  var i = 0;
  while (i <= 3) {
  alert(i);
  i++;
 }


  var i = 0;
  do {
  console.log(i);
  i++;
  } while (i <= 3);


*/

// function hello(s,a){
//     alert('My Name is :'+s +' & ' + ' MY Age is :' + a)
// }

// function getvalue(){
//     var name = document.getElementById('zxc').value;

//     console.log(name);
//     name.value = ""

// }

// function setvalue(){
//     var name = document.getElementById('zxc');
//     name.value = "sahil";
// }

// setvalue()




// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }



function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}