// ul id access list

var list = document.getElementById("list")





function addtodo(){


    // input filet acces by button id todo-app
    var todolist = document.getElementById("todo-app")


    // create li tag with text
    var li = document.createElement("li")
    var litext = document.createTextNode(todolist.value)
    li.setAttribute("class","list-group-item")
    li.appendChild(litext)

    // create delete btn

    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")

    delbtn.setAttribute("class","btn btn-info")
    delbtn.setAttribute("onclick","deletetodo(this)")
    delbtn.appendChild(deltext)
    
    li.appendChild(delbtn)


// create edit btn

var editbtn = document.createElement("button")
var editbtntext = document.createTextNode("Edit")
editbtn.setAttribute("class","btn btn-danger")
editbtn.setAttribute("onclick","edittodo(this)")
editbtn.appendChild(editbtntext)
li.appendChild(editbtn)



    list.appendChild(li)

    // console.log(li)

    todolist.value = ''


}

// e stand for event
function deletetodo(e){

    e.parentNode.remove()
    //console.log(e)
    // console.log(e.parentNode)
}


// All todo Clear

function cleartodo(){
    list.innerHTML = ''
}

function edittodo(e){
    // console.log(e)
    // console.log(e.parentNode)
    // console.log(e.parentNode.nodeValue)
    //console.log(e.parentNode.childNodes[0])
    //console.log(e.parentNode.firstChild.nodeValue)

    // e.parentNode.firstChild.nodeValue = "sharoz"

    var edit = prompt("Enter A Edit Todo",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit
}