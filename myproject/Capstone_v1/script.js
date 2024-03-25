function sendMessage() {
  var userMessage = document.getElementById('user-message').value;
  var chatBox = document.querySelector('.chat-box');
  var messageDiv = document.createElement('div');
  messageDiv.textContent = userMessage;
  chatBox.appendChild(messageDiv);
}
