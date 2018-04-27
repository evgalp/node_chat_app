console.log('from chat.js');

// connection

class Chat {
  constructor(chatId) {
    const socket = io.connect('http://localhost:4000');

    this.chat = document.getElementById(chatId);
    this.output = chat.querySelector('#chat-output');
    this.msg = chat.querySelector('#chat-message');
    this.handle = chat.querySelector('#chat-handle');
    this.sendBtn = chat.querySelector('#chat-send');

    this.sendBtn.addEventListener('click', this.sendMsg.bind(this));

    socket.on('chat', (data) => {
      output.innerHTML = data.message
    })
  }

  sendMsg(e) {
    socket.emit('chat', {
      message: msg.value,
      handle: handle.value
    })
  }
}

let c = new Chat('chat');
