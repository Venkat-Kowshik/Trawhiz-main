var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
});
}

// get DOM elements
const chatbox = document.getElementById("chatbox");
const inputBox = document.getElementById("textInput");

// function to send user's message to chatbox
function sendButton() {
  let inputText = inputBox.value;
  if (inputText !== "") {
    let userHtml = '<p class="userText"><span>' + inputText + '</span></p>';
    chatbox.insertAdjacentHTML("beforeend", userHtml);
    inputBox.value = "";

    // call function to send response from bot after a delay
    setTimeout(function() {
      botResponse();
    }, 500);
  }
}

// function to generate a response from the bot
function botResponse() {
  let botHtml = '<p class="botText"><span>One moment please.</span></p>';
  chatbox.insertAdjacentHTML("beforeend", botHtml);
}
