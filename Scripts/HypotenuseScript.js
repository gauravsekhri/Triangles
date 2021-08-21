const triBase = document.querySelector("#triBase");
const triHeight = document.querySelector("#triHeight");

const chkbtn = document.querySelector("#checkk");
const resultDisplay = document.querySelector("#resultDisplay");


chkbtn.addEventListener("click", function(){
    const sumTotal = sumAngles(Number(triBase.value), Number(triHeight.value));
    // if(sumTotal === 180){
        resultDisplay.innerHTML = "Hypotenuse = "+sumTotal.toFixed(2);
    // }
    // else{
    //     resultDisplay.innerHTML = "It is NOT a triangle";
    // };
});

function sumAngles(a,b){
    const sum = (a*a) + (b*b);
    const hypo = Math.sqrt(sum);
    // hypo = hypo.toFixed(2);
    // const hypo = format(math.sqrt(sum), '.2f');
    return hypo;
};