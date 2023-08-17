// Connect to the Socket.io server
const socket = io();

// Function to send a chat message
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
}

// Listen for chat messages from the server and display them
socket.on('chat message', (message) => {
    const messageContainer = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    // Scroll to the bottom to show the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
});
