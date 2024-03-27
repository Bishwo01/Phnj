document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'user';
  const validPassword = 'password';

  if (username === validUsername && password === validPassword) {
    document.getElementById('message').textContent = 'Login successful!';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
  }
});
const video = document.getElementById('videoBG');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = 'Mute';
  } else {
    video.muted = true;
    muteButton.textContent = 'Unmute';
  }
});





const inputText = document.getElementById('inputText');
const previewText = document.getElementById('previewText');

inputText.addEventListener('input', function() {
  previewText.textContent = inputText.value;
});