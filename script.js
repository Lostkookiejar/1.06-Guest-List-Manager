function addGuest(){
  const userInput = document.getElementById("guest-name");
  const result = document.getElementById("guest-message");
  var ul = document.getElementById("guest-list");

  if (userInput.value.length > 0){
    var li = document.createElement("li");
    var userInputName = userInput.value;
    li.appendChild(document.createTextNode(userInputName));
    ul.appendChild(li);
    result.innerHTML = `${userInputName} has been added!`;
    userInput.value = "";

  } else {
    result.innerHTML = "Please enter a guest name"
  }
}