let num = '0';
let score;


let questionArray = [{
  question: 'q1',
  correctAnswer: 'a'
}, {
  question: 'q2',
  correctAnswer: 'b'
}, {
  question: 'q3',
  correctAnswer: 'c'
}, {
  question: 'q4',
  correctAnswer: 'c'
}]



let answerArray = [{
  question: 'q1',
  someAnswer: 'c'
}, {
  question: 'q2',
  someAnswer: 'b'
}, {
  question: 'q3',
  someAnswer: 'c'
}, {
  question: 'q4',
  someAnswer: 'c'
}]

function findQuestion(q) {
  for (i = 0; i < questionArray.length; i++) {
    if (questionArray[i].question == q) {
      console.log("question found:", questionArray[i].question, "answer: ", questionArray[i].correctAnswer)
      return questionArray[i]
    }
  }
  return null
}

function check(a) {
  for (i = 0; i < a.length; i++) {
    q = findQuestion(a[i].question)
    console.log(q)
    if (q == null) {
      return false
    }
    if (q.correctAnswer != a[i].someAnswer) {
      console.log(q.correctAnswer, " != ", a[i].someAnswer)
      return false
    }
  }
  return true
}

console.log(check(answerArray))


// const result = question.filter((item) => item.correctAnswer === 'c')
// console.log(result);


// const a = -3;
// if (a === 0) {
//   console.log('верно');
// } else {
//   console.log('не верно')
// }
//
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i, 'число - четное');
//   } else {
//     console.log(i, 'число - нечетное')
//   }
// }