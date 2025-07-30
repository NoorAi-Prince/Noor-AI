function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  const userText = userInput.value;
  if (!userText) return;

  const userMessage = `<p><strong>You:</strong> ${userText}</p>`;
  const botResponse = `<p><strong>Noor:</strong> ${generateReply(userText)}</p>`;

  chatBox.innerHTML += userMessage + botResponse;
  chatBox.scrollTop = chatBox.scrollHeight;

  userInput.value = '';
}

function generateReply(input) {
  if (input.toLowerCase().includes("hello")) {
    return "Assalamu Alaikum! Main Noor hoon, aapki personal AI.";
  }
  return "Mujhe aapka sawal samajhne ke liye training chal rahi hai.";
    }
