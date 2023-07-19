const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const usersList = document.getElementById("users");

const name = prompt("What is your name?");

socket.emit("new-user", name);

let recipientSelect;
function sendMessage() {
  const recipient = recipientSelect;
  const message = messageInput.value;
  console.log(recipient);
  console.log(message);
  if (recipient && message) {
    socket.emit("private-message", {
      recipient: recipient,
      message: message,
    });
  }
}

socket.on("active-users", (activeUsers) => {
  const activeUserList = usersList;

  activeUserList.innerHTML = "";
  activeUsers.forEach((user) => {
    const userElement = document.createElement("li");
    userElement.addEventListener("click", () => {
      recipientSelect = user;
    });
    userElement.innerText = user;
    activeUserList.append(userElement);
  });
});

socket.on("private-message", (data) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = `${data.sender}: ${data.message}`;
  messageContainer.append(messageElement);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  sendMessage();
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
