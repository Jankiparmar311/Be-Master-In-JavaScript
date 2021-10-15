const questions = require("./questions")
var rs = require("readline-sync")
let chalk = require('chalk')


let score = 0
let log = console.log

let blue = chalk.bold.blue
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.yellow
let s = chalk.bold.magenta

let name = rs.question("What is your name? ")
log("\n")
let message = `Hello ${name} !!`
log(cyan(message))
log(s("\nWelcome in my JavaScript Quiz !!"))
log(blue("\nThere will be 10 Questions."))
log(green("+5 ponits for correct answer,"),cyan(" -2 for wrong answer. "))
log(yellow("Press A / B / C / D for give the Answer."))

let n = rs.question(s("\nHow many questions you want to Attempt ?   "))

if(n <= 10)
{
  for(let i = 0;i < n; i++){
  log("\n")
  log(title(questions[i]["q"+[i+1]]))
  log(blue(questions[i]["a"]))
  log(blue(questions[i]["b"]))
  log(blue(questions[i]["c"]))
  log(blue(questions[i]["d"]))
  log("\n")
  let ans = rs.question(yellow("Your Answer :"))

  if(ans == questions[i]["ans"].charAt(0).toLowerCase() || ans == questions[i]["ans"].charAt(0).toUpperCase())
  {
    log(green("Correct"))
    score = score + 5
    log(s("Your Score is :"+score))
  }
  else
  {
    log(red("Incorrect"))
    log(green("Correct Answer is : ")+questions[i]["ans"])
    score = score - 2
    log(s("Your Score is :"+score))
  }
}
}else{
  log(red("--There will be only 10 Questions!!"))
}
log("\n")
log(cyan("Thank you for play the Quiz.."))
log(green("\n"+`${name}`+" Your Final Score is : "+score))

