//  Array de preguntas

const questionLibrary = [  
    [
        {
            question: 'Ingrediente mas utilizado en la comida japonesa', 
            answer: 'arroz'
        },

        {
            question: '¿Cuál es el nombre del país más grande de América del Sur?',
            answer: 'argentina'
        },

        {
            question: '¿Qué órgano del cuerpo humano es responsable de bombear la sangre?',
            answer: 'corazón'
        },

        {
            letter:'a'
        }
    ],

[
        {
            question: '¿Cómo se llama la capital de Portugal?', 
            answer: 'Lisboa'
        },
        
        {
            question: '¿Qué ave nocturna de hábitos carnívoros es conocida por girar la cabeza casi 180 grados?',
            answer: 'Buho'
        },
        
        {
            question: 'Metodo de transporte acuatico',
            answer: 'Barco'
        },
        
        {
            letter:'b'
        }
],
];

//Variables globales

let counterCorrect = 0; 
let counterWrong = 0; 
let turn = 0;

 let passedQuestion= [];
 let switchCase = false; 

const dom = document
/* const document = dom */ 
// 
const sumCounterCorrect = () => {
    counterCorrect++
}

const sumCounterWrong = () => {
    counterWrong++
}

const sumTurn = () => {
    turn++
}


const modifyLetter = () => { 
   const foundLetter = questionLibrary[turn][3].letter;
   console.log(foundLetter)
   let domLetterToModify = dom.querySelector(`.${foundLetter}-letter`)

   domLetterToModify.innerHTML = `<p class="grey-letter" ${foundLetter.toUpperCase()}</p>`  // 

   

}

const handleSummit = (event) => {
    const formElement = event.target
    event.preventDefault()          // esto siempre va 
    let userAnswer= formElement.elements.namedItem("answer").value
    console.log(userAnswer)
    let correctAnswer= questionLibrary[turn][0].answer;
        if(userAnswer === correctAnswer) {
            /* deleteLetter() */
            modifyLetter()
            sumCounterCorrect();    
        }else{
            modifyLetter()
            sumCounterWrong();   
        }
        sumTurn()

    
}

const printQuestion = () => {
    
}

// primer paso
const domSubmit = dom.querySelector("form"); 

domSubmit.addEventListener("submit", handleSummit);





