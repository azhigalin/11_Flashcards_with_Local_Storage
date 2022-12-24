let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
const flashcards = document.querySelector(".flashcards");
const createBox = document.querySelector(".create-box");

document.querySelector("#save").addEventListener("click", addFlashCards);

document.querySelector("#del-cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = "";
  contentArray = [];
});

document.querySelector("#close").addEventListener("click", () => {
  createBox.style.display = "none";
});

document.querySelector("#new-card").addEventListener("click", () => {
  createBox.style.display = "block";
});

let cardMaker = (element) => {
  const flashcard = document.createElement("div");
  const question = document.createElement("h2");
  const answer = document.createElement("h2");

  flashcard.className = "flashcard";
  question.className = "flashcard_question";
  answer.className = "flashcard_answer";
  question.textContent = element.myQuestion;
  answer.textContent = element.myAnswer;
  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener("click", () => {
    if (answer.style.display == "none") answer.style.display = "block";
    else answer.style.display = "none";
  });

  document.querySelector(".flashcards").appendChild(flashcard);
};

contentArray.forEach(cardMaker);

function addFlashCards() {
  const answer = document.querySelector("#answer");
  const question = document.querySelector("#question");

  let flashcardInfo = {
    myQuestion: question.value,
    myAnswer: answer.value,
  };

  contentArray.push(flashcardInfo);
  localStorage.setItem("items", JSON.stringify(contentArray));

  console.log(contentArray);

  cardMaker(contentArray[contentArray.length - 1]);

  answer.value = "";
  question.value = "";
}
