// create an array of correct answers

const correctAnswer = ['A','B','B','A'];

//ATTACTH AN EVENTLISTENER TO THE FORM

const form = document.querySelector('.quiz-form');
console.log(form)


//GET THE RESULT ELEMENT FROM THE DOM

let result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    

    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    console.log(userAnswers)
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswer[index]){
            score+=25;
        }
    })

    result.classList.remove('d-none');
    //result.querySelector('span').textContent = `${score}%`;

    //scroll to top

    scrollTo(0,0);

    //how to scroll to a specific item?
    //animate to score value:interval

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if(output===score){
            clearInterval(timer);

        }

        else{
            output++;
        }
    }, 10);
})

//window object

setTimeout(()=>{

},3000)


//delay the function by 3 ==> the function fires after 3 seconds

// setInterval(() => {
//     console.log('hello');
// }, 100);

//how to stop interval

let i = 0;

//store setinterval in a variable

const timer = setInterval(() => {
    i++;
    console.log(i);
    if(i === 5 ){
        clearInterval(timer)
    }
}, 1000);