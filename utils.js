// import functions and grab DOM elements
import { getPosts } from "./fetch-utils.js";
// let state

// set event listeners 

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


/*Create a render function that creates a div,
pulls the name of the creator, creates p w/ user, album, artist
and appends p to div*/

export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.textContent = `${post.Album} by ${post.Artist}. Posted by ${post.Username}.`;
    return div;
}

// function that loops through data on load and calls render

// create insert function that inserts form data to supabase table*/