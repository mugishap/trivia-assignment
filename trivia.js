const readline = require('readline')
const questions = require('./questions.json')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numberOfQuestions = 0

const askQuestion = (index) => {
    const { answer, question } = questions[index]
    rl.question(`#${index} : ${question}`, (input) => {
        if (input.toLowerCase() === answer.toLowerCase()) {
            console.log('Correct!')
        } else {
            console.log(`Wrong! The correct answer is ${answer}`)
        }
        if (index + 1 === numberOfQuestions) {
            rl.close()
            console.log('Thanks for playing!')
            return
        }
        askQuestion(index + 1)
    })
}

rl.question('How many questions would you like to answer? ', (input) => {
    numberOfQuestions = parseInt(input)
    if (isNaN(numberOfQuestions) || numberOfQuestions > questions.length) {
        console.log('Invalid input. Exiting...')
        rl.close()
        return
    }
    askQuestion(0)
})