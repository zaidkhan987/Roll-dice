const questions = [{
    'que': 'which of the following markup language ',
    'a': 'html',
    'b': 'css',
    'c': 'java',
    'd': 'python',
    'correct': 'a'
},

{
    'que': 'what year of javascript launched',
    'a': '1994',
    'b': '1995',
    'c': '1996',
    'd': 'None of the obove',
    'correct': 'b'
},

{
    'que': 'what does css stand for ',
    'a': 'hyper text markup language',
    'b': 'cascading style sheet',
    'c': 'jason object notation',
    'd': 'helicopter terminal motorboats lamborghini',
    'correct': 'b'
}
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const QuesBox = document.getElementById('quesBox');
const inputOptions = document.querySelectorAll('.option');

const loadQuestion = () => {

    if (index === total) {
        return endQuize()
    }
    reset()
    const data = questions[index]
    QuesBox.innerText = `${index + 1}) ${data.que}`
    inputOptions[0].nextElementSibling.innerText = data.a;
    inputOptions[1].nextElementSibling.innerText = data.b;
    inputOptions[2].nextElementSibling.innerText = data.c;
    inputOptions[3].nextElementSibling.innerText = data.d;

}



const getAnswer = () => {
    let answer;
    inputOptions.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        })
    return answer
}



const submitQuize = () => {

    const data = questions[index]
    const ans = getAnswer()
    console.log(ans);
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}




const reset = () => {
    inputOptions.forEach(
        (input) => {
            input.checked = false

        })
}


const endQuize = () => {
    document.getElementById('box').innerHTML = ` 
    <h1>congratulations</h3>
    <h1> ${right} / ${total} are correct </h1>
    <img src="" alt="">`


}


loadQuestion()