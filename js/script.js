let questions = [
    {
        id: 0,
        question: "Questão",
        Answer: "Resposta"
    },
    {
        id: 1,
        question: "Questão",
        Answer: "Resposta"
    },
    {
        id: 2,
        question: "Questão",
        Answer: "Resposta"
    },
    {
        id: 3,
        question: "Questão",
        Answer: "Resposta"
    },
    {
        id: 4,
        question: "Questão",
        Answer: "Resposta"
    }
  ];
  
  questions.map((itemQuestion, index) => {
    let itemsQuestions = document.querySelector(".questionItem").cloneNode(true);
  
    itemsQuestions.id = "questionItem";
    itemsQuestions.querySelector(".TextQandA p").innerHTML = itemQuestion.question;
    itemsQuestions.querySelector(".Answer p").innerHTML = itemQuestion.Answer;
    itemsQuestions.setAttribute("onclick", `showAnwer(${index})`);
  
    document.querySelector("#Questions").append(itemsQuestions);
  })
  
  document.getElementById("questionItem").parentNode.removeChild(document.getElementById("questionItem"));
  
  
  function showAnwer (numItem) {
    let answerDocument = document.querySelectorAll(".Answer");
    let emoji = document.querySelectorAll(".TextQandA i")
  
    if(answerDocument[numItem].classList.contains("show")){
        answerDocument[numItem].classList.replace('show', 'showOff');
        emoji[numItem].classList.replace('fa-minus', 'fa-plus');
    } else {
        answerDocument[numItem].classList.replace('showOff', 'show');
        emoji[numItem].classList.replace('fa-plus','fa-minus');
    }
  }