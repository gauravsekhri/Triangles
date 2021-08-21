const quizform = document.querySelector("#quizform");
const submitbtn = document.querySelector("#quizsubmitbtn");
const result = document.querySelector("#resultout");

const answers = ["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°",];


submitbtn.addEventListener("click", function(){
    let score = 0;
    let i =0;
    const formdata = new FormData(quizform);
    for(let ques of formdata.values()){
        if(ques == answers[i]){
            score++;
        }
        i++
    }
    if (score == 10) {
        result.innerHTML= "Yayy!! You Scored 10 out of 10";
    } else {
        result.innerHTML= "Your Score = "+score+", Better luck next time";
    }
    // result.innerHTML= score;
});