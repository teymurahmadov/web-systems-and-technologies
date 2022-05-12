let faranheitBtn = document.querySelector(".faranheit a");
let celciusOutput = document.querySelector(".faranheit h3 span")
let faranheit;
let celcius;

faranheitBtn.addEventListener("click",function(e){
    faranheit = parseFloat(document.querySelector(".faranheit input").value);
    console.log(faranheit)
    celcius = (faranheit-32)*5/9;
    celciusOutput.textContent = celcius;
    e.preventDefault();
})


let celciusBtn = document.querySelector(".celcius a");
let faranheitOutput = document.querySelector(".celcius h3 span");

celciusBtn.addEventListener('click',function(e){
    celcius = parseFloat(document.querySelector(".celcius input").value);
    console.log(celcius);
    faranheit = (celcius * 9 / 5) + 32;
    faranheitOutput.textContent = faranheit;

    e.preventDefault();
})

let miles;
let kilometers;

let milesBtn = document.querySelector(".miles a");
let kilometersOutput = document.querySelector(".miles h3 span");

milesBtn.addEventListener('click',function(e){
    miles = parseFloat(document.querySelector(".miles input").value);
    console.log(miles);
    kilometers = miles * 1.609;
    kilometersOutput.textContent = kilometers;

    e.preventDefault();
})

let kilometersBtn = document.querySelector(".kilometers a");
let milesOutput = document.querySelector(".kilometers h3 span");

kilometersBtn.addEventListener('click',function(e){
    kilometers = parseFloat(document.querySelector(".kilometers input").value);
    console.log(kilometers);
    miles = kilometers / 1.609;
    milesOutput.textContent = miles;

    e.preventDefault();
})

