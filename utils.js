// let state

// set event listeners 

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


/*
Create a render function that creates a div,
pulls the name of the creator, creates div w/ user, album, artist
*/

export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.textContent = `${post.Album} by ${post.Artist}. Posted by ${post.Username}.`;
    return div;
}
