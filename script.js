//Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

/*use one of the following events to remove any character that is not a letter
keyup event
or keypress event
or keydown event
or input event*/


let input = document.createElement("input");
document.body.appendChild(input);
input.setAttribute("type","text")
input.setAttribute("onkeyup","Check(this)")

input.style.width="250px";
input.style.height="30px";
input.style.border="1px solide black"


function Check(chars) {
  // Caractères autorisés
  let caractereAutorise = new RegExp("[a-z A-Z]", "i");
  let valid;
  for (x = 0; x < chars.value.length; x++) {
      valid = caractereAutorise.test(chars.value.charAt(x));
      if (valid == false) {
          chars.value = chars.value.substr(0, x) + chars.value.substr(x + 1, chars.value.length - x + 1); x--;
      }
  }
}