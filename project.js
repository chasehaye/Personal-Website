// MODEL => HOLDS THE STATE OF THE APPLICATION
const wordsUsed = [];
// CACHED DOM ELEMENTS
const wordsListElement = document.querySelector("#words-list")
const inputItem = document.getElementById("new-word-input")
const newWordInputElement = document.querySelector("#new-word-input")
const timeDoc = document.querySelector("#timer")
const startBtn = document.querySelector("#startBtn")
const score = document.getElementById("score")
// VIEW
// WHEN THE APP STATE CHANGES, RE-RENDER THE VIEW
function renderList(){
    wordsListElement.innerHTML = "";
    // Loop through all the words in wordsUsed
    wordsUsed.forEach(function(word){
        // Create a new list item
        const newListItem = document.createElement('li');
        // Set the list item's text equal to that word
        newListItem.innerText = word;
        // Append the list item to my #words-list
        wordsListElement.append(newListItem)
        newListItem.classList.add("txtList");
    })
}
// CONTROLLER
function handleWordAdd(newWord){
    if(wordsUsed.length === 0){
        wordsUsed.push(newWord);
        return renderList();
    }
    const firstLetterOfNewWord = newWord[0];
    const lastWordInList = wordsUsed[wordsUsed.length - 1];
    const lastLetterOfLastWordInList = lastWordInList[lastWordInList.length - 1];
    if(lastLetterOfLastWordInList === firstLetterOfNewWord){
        console.log("THIS IS A VALID SUBMISSION")
        wordsUsed.push(newWord)
        renderList();
    }else{
        console.log("THIS IS NOT A VALID SUBMISSION")
        console.log(`Your new word needs to start with ${lastLetterOfLastWordInList}`)
    }
}
//Stored Variables
let pointsTotal = 0;
let currentNum = 0;

function respondToWordSubmit(){
    // Grab the text from the input
    const newWordToAdd = newWordInputElement.value;
    // Call the handleWordAdd function using that text
    handleWordAdd(newWordToAdd)
    // Clear the input field
    newWordInputElement.value = "";
    //Score keeper
    function changeScore() {
        pointsTotal += 1;
        score.textContent = pointsTotal;
    }
    changeScore();
}
//timer
function startTimer() {
 
  currentNum = setInterval(() => {
    if (currentNum >= 90) {
        timer.textContent = "Times up!!!"
      }else{
    currentNum++;
    timer.textContent = `${currentNum}`;
    }
    }, 1000);
}
//start timer event listener
startBtn.addEventListener('click', startTimer);

//enter event listener
inputItem.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        respondToWordSubmit();
    }
})