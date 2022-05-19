// import functions and grab DOM elements
import { createNewPost } from '../fetch-utils.js';
// let state
const faveForm = document.getElementById('fave-form');

faveForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const albumData = new FormData(faveForm);
    const data = await createNewPost(
        albumData.get('album'),
        albumData.get('artist'),
        albumData.get('username')
    );
    console.log(data);
});


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



