// Function to add comments
function addComment(commentSectionId, nameInputId, messageInputId) {
    const name = document.getElementById(nameInputId).value;
    const message = document.getElementById(messageInputId).value;
    const commentSection = document.getElementById(commentSectionId);

    if (name && message) {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${name}:</strong> ${message}`;
        
        commentSection.appendChild(comment);

        // Clear input fields after submission
        document.getElementById(nameInputId).value = '';
        document.getElementById(messageInputId).value = '';
    } else {
        alert('Please enter both a name and a comment.');
    }
}




