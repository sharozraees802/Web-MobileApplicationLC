// var list = document.getElementsByTagName("li")

// console.log(list.length)


// var target = document.getElementById("p1");

// console.log(target.attributes[1].nodeValue)



// if(target.hasAttribute("class")){
//     alert("available")
// }else{
//     alert("not available")
// }


// var p = document.createElement('h1');
// var text = document.createTextNode("Ghous Ahmed")
// p.appendChild(text)

// var main = document.getElementById("main");

// main.appendChild(p)



function addMessage(){
   var val = document.getElementById("val");
   var p = document.createElement("p")
   var text = document.createTextNode(val.value)
   p.appendChild(text)
   var messages = document.getElementById("messages")
   messages.appendChild(p)
}
