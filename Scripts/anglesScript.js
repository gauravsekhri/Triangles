const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");

const chkbtn = document.querySelector("#checkk");
const resultDisplay = document.querySelector("#resultDisplay");


chkbtn.addEventListener("click", function(){
    const sumTotal = sumAngles(Number(angle1.value), Number(angle2.value), Number(angle3.value));
    if(sumTotal === 180){
        resultDisplay.innerHTML = "It is a triangle";
    }
    else{
        resultDisplay.innerHTML = "It is NOT a triangle";
    };
});

function sumAngles(a,b,c){
    const sum = a+b+c;
    return sum;
};

