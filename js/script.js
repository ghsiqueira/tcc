let questions = [
    {
        id: 0,
        question: "Como faço para pedir o impeachment da Scrum Master?",
        Answer: "Também gostaria de saber!"
    },
    {
        id: 1,
        question: "Devemos fazer o cadastro pelo site?",
        Answer: "Depende de vcs!"
    },
    {
        id: 2,
        question: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        Answer: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    },
    {
        id: 3,
        question: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        Answer: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
    },
    {
        id: 4,
        question: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        Answer: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
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