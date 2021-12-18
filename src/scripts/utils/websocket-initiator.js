const WebSocketInitiator = {
  init(url) {
    const ws = new WebSocket(url);
    ws.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    console.log(message);
  },
};

export default WebSocketInitiator;
