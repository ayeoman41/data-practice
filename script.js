function correct(){
document.querySelector('.button')
alert("Correct!!!")
}

function no(){
    document.querySelector('.button')
    alert("Incorrect")
}

let questions =[
    {
        numb: 1,
        question: "The Miami Hurrianes mascot is...?",
        answer: "The Ibis",
        options: [
            "The Tiger",
            "The Bear",
            "The Panther",
            "The Viking"
        ]
    }
]

function showQuestions(index){
    const que = document.querySelector(".que");
}
