// import functions and grab DOM elements
import { createNewPost } from '../fetch-utils.js';
// let state
const faveForm = document.getElementById('fave-form');

faveForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(faveForm);
    const newPost = {
        Album: data.get('Album'),
        Artist: data.get('Artist'),
        Username: data.get('Username'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
});


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



