


function check(){
    
    var score = 0;

    var qustion_1_result = document.getElementById("q1-a4")

    if (qustion_1_result.checked == true) {
        
        score++
        alert("Q1 answer right")

    } else {
        
        alert("Q1 answer wrong")
    }
    var right_answer_2 = document.getElementById("q2-a2")
    if (right_answer_2.checked == true) {
        
        score++
        alert("Q2 answer right")



    } else {
        alert("Q2 answer wrong")       
    }

    var right_answer_3 = document.getElementById("q3-a2")
    if (right_answer_3.checked == true) {
        
        score++
        alert("Q3 answer right")



    } else {
        alert("Q3 answer wrong")       
    }

    alert("Your score "+ score++ +" / 3 ")
}