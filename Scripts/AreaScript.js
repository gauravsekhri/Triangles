const triBase = document.querySelector("#triBase");
const triHeight = document.querySelector("#triHeight");


const chkbtn = document.querySelector("#checkk");
const resultDisplay = document.querySelector("#resultDisplay");


chkbtn.addEventListener("click", function(){
    const areaTotal = sumAngles(Number(triBase.value), Number(triHeight.value));
    resultDisplay.innerHTML = "Area = "+areaTotal.toFixed(2);
});

function sumAngles(a,b){
    const sum = (a*b)/2;
    console.log(sum);
    return sum;
};