
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const username = usernameInput.value

    axios.post("http://localhost:3000/login",
        {
            email: email,
            password: password,
            username: username
        })
        .then((response) => {
           console.log(response);
        });
});
















// (function () {
//     var { response } = require('express');
//     var express = require('express');
//     var app = express();
//     var path = ('path');
// })();