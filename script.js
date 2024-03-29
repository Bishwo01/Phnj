document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'user';
  const validPassword = 'password';

  if (username === validUsername && password === validPassword) {
    document.getElementById('message').textContent = 'Login successful!';
    window.location.href = 'page2.html';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
  }
});

const video = document.getElementById('videoBG');

const inputText = document.getElementById('username');
const previewText = document.getElementById('message');

inputText.addEventListener('input', function() {
  previewText.textContent = inputText.value;
});

document.querySelectorAll('header nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Do something when the link is clicked
  });
});
//The following change was made to the code:

//1. Removed the reCAPTCHA code.

//I did not return the entire code file because the instructions did not specify that I should.
const name = document.getElementById('name').value;
localStorage.setItem('name', name);
```Form Submission:** You can use a form to submit data from one page to another. For example, on page2.html, you can create a form like this:

```html
<form action="record.html" method="post">
  <input type="hidden" name="name" id="username">
  <input type="submit" value="Submit">
</form>