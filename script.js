// How to accept user input:

//1- EASY WAY = windows prompt();
//2- PROFESSIONAL WAY = HTML textbox


//Below is the EASY WAY:
//  let username =window.prompt('what is your name?');  
//  console.log(username);


//Below is the PROFESSIONAL WAY:

let username;
let userWelcoming;

document.getElementById('submit-btn').onclick = function () {      //when the user CLICK ON the 'submit' button, let's three events happen: 1- accept and print the user's input on console page.
    username = document.getElementById('user-input').value;           // 2- change the TEXT-CONTENT of the (elemnt with id=headng1) to (Welcome user's input).
    console.log(username);                                           //3- the color of (Welcome user's input) must be RED.
    userWelcoming = document.getElementById('heading1').textContent = `Welcome ${username}...`;
    userWelcoming = document.getElementById('heading1').style.color = 'red';

}




