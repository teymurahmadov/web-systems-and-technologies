let yO = document.querySelector(".y span");
let wO = document.querySelector(".w span");

document.querySelector("#btn").addEventListener('click', function (e) {
    a = parseFloat(document.querySelector("#a").value);
    b = parseFloat(document.querySelector("#b").value);
    x = parseFloat(document.querySelector("#x").value);

    y = (b * Math.pow(Math.tan(x), 2)) - (a / (Math.pow(Math.sin(x / a)), 2));
    w = (a * (1/ Math.pow(Math.E, Math.sqrt(a))) * Math.cos((b * x) / a)) + Math.abs(y);

    yO.textContent = y;
    wO.textContent = w;

    e.preventDefault();
})



let h = Math.pow(4, 2);
h = Math.sqrt(16);




 