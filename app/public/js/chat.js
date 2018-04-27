const socket = io.connect('http://localhost:4000');

let chat = document.getElementById('chat');
let output = chat.querySelector('#chat-output');
let msg = chat.querySelector('#chat-message');
let handle = chat.querySelector('#chat-handle');
let sendBtn = chat.querySelector('#chat-send');

sendBtn.addEventListener('click', sendMsg);

function sendMsg(e) {
  if (!msg.value || !handle.value) {return false}
  socket.emit('chat', {
    message: msg.value,
    handle: handle.value
  })
}

socket.on('chat', (data) => {
  output.innerHTML += `
  <div class="chat__message">
    <span class="message__name">${data.handle}</span>
    <span class="message__text">${data.message}</span>
  </div>
  `
})
