document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input');
    const userText = input.value;
    appendMessage('You', userText);
  
    const res = await fetch('/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userText })
    });
  
    const data = await res.json();
    appendMessage('Bot', data.result);
    input.value = '';
  });
  
  function appendMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  