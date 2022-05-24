import { checkAuth, getPosts } from './fetch-utils.js';// import functions and grab DOM elements
import { renderPosts } from './utils.js';

const postsElem = document.getElementById('Posts');

// let state

checkAuth(); 

async function displayPosts() {
    postsElem.textContent = '';
    const data = await getPosts();
    if (data) {
        for (let item of data) {
            const post = renderPosts(item);
            postsElem.append(post);
        }
    } else {
        alert('Something went wrong :(');
    }
}

displayPosts();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
