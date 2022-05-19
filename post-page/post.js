// import functions and grab DOM elements
import { createNewPost } from "../fetch-utils.js";
// let state
const faveForm = document.getElementById('fave-form');

faveForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(faveForm);
  const response = await createNewPost(data.get('Album'), data.get('Artist'), data.get('Username'))
})


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



