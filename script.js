const textInputElement = document.getElementById("text-input");
const chkButtonElement = document.getElementById("check-btn");
const resultTextElement = document.getElementById("result");
let textInput = document.querySelector("#text-input").value;
let textLowerCase = "";
let cleanText = "";
let reversedText = "";
let resultsText = "";



/* Check Palindrome*/
function checkText() { 
textInput = document.querySelector("#text-input").value;
console.log(`Input: ${textInput}`);
textLowerCase = textInput.toLowerCase()
console.log(`Lower: ${textLowerCase}`);
cleanInput(textLowerCase)

reversedText = "";
for (let i = cleanText.length - 1; i >= 0; i--) { 
  reversedText += cleanText[i]
};
console.log(`Reversed: ${reversedText}`);


if (cleanText === "") {
  alert(`Please input a value`);
  return
};

cleanText === reversedText ? resultsText = `${textInput} is a palindrome` : resultsText = `${textInput} is not a palindrome`;
  
resultTextElement.classList.remove('hide');
resultTextElement.innerHTML = `
<p>${resultsText}</p>
`;

return
}



/* Function Clean Input*/
function cleanInput(str) {
  cleanText = str.replaceAll(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  cleanText = cleanText.replaceAll(" ", '');
  console.log(`Clean: ${cleanText}`);
  return cleanText
}



/* Clear Results*/
function clearResults() {
  reversedText = "";
  resultTextElement.classList.add('hide');
  resultTextElement.innerHTML = '';
}



/* Event Listeners*/
chkButtonElement.addEventListener("click", checkText);
textInputElement.addEventListener("input", clearResults);