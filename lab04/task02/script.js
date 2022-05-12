let questions = [
    {
        question:"Which answer represents length of equator line?",
        answers : [
            {
                variant:"a",
                content:"40,075 kilometers"
            },
            {
                variant:"b",
                content:"5 kilometers"
            },
            {
                variant:"c",
                content:"20,190 kilometers"
            }
        ],
        trueAnswer:"a"
    },
    {
        question:"Which answer represents length of equator line?",
        answers : [
            {
                variant:"a",
                content:"40,075 kilometers"
            },
            {
                variant:"b",
                content:"5 kilometers"
            },
            {
                variant:"c",
                content:"20,190 kilometers"
            }
        ],
        trueAnswer:"a"
    },
    {
        question:"Which answer represents length of equator line?",
        answers : [
            {
                variant:"a",
                content:"40,075 kilometers"
            },
            {
                variant:"b",
                content:"5 kilometers"
            },
            {
                variant:"c",
                content:"20,190 kilometers"
            }
        ],
        trueAnswer:"a"
    }
    
]

questions.forEach(element => {
    let questionElem = document.createElement("div");
    questionElem.innerHTML = `
<div class="question">
<p>${element.question}</p>

<input type="radio" id="age1" name="age" value="30">

<label for="age1">${element.answers}</label><br>
<input type="radio" id="age2" name="age" value="60">
<label for="age2">31 - 60</label><br>
<input type="radio" id="age3" name="age" value="100">
<label for="age3">61 - 100</label><br><br>
</div>
`
});
 
 