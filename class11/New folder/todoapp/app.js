
// get list ul id

var list = document.getElementById("list")



function addTodo(){

    // get value input text
    var todoapp = document.getElementById("todo-app")


    // create li tag with add text
    var li = document.createElement('li')
    var litext = document.createTextNode(todoapp.value)
    li.appendChild(litext)
    
    // create deletebutton
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    
    // create editbtn

      var edbtn = document.createElement("button")
    var edtext = document.createTextNode("Edit")
    edbtn.appendChild(edtext)
    edbtn.setAttribute("onclick","edititem(this)")
    li.appendChild(edbtn)
    
    
    
    
    
    // console.log(li)
    list.appendChild(li)
    
    
    todoapp.value = ''
    
}


function deleteItem(e){
    // console.log("zxcxzcxzcxcxzxcxczczxccxzcxcxzc")
    // console.log(e)
    // console.log(e.parentNode)

    e.parentNode.remove()
}

function clearTodo(){
    list.innerHTML = ""
}

function edititem(e){
    // console.log(e)

    // console.log(e.parentNode.nodeValue)
    // console.log(e.parentNode.childNodes[0])

    // console.log(e.parentNode.firstChild)

    // e.parentNode.firstChild.nodeValue = "sharoz"
    // e.parentNode.firstChild.nodeValue = prompt("Enter Value",e.parentNode.firstChild.nodeValue)


    var edit = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue) 
    e.parentNode.firstChild.nodeValue = edit

    
}