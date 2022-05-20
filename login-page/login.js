// import functions and grab DOM elements
import { signupUser, loginUser, logRedir } from '../fetch-utils.js';
// let state
const signUpForm = document.getElementById('sign-up-form');
const loginForm = document.getElementById('login-form');
// set event listeners 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signupUser(data.get('email'), data.get('password'));
    // console.log(data);
    if (user) {
        logRedir();
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    const user = await loginUser(data.get('email'), data.get('password'));
    if (user) {
        logRedir();
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state\

logRedir();