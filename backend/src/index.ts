import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data: any) {
    const message = JSON.parse(data);

    switch (message.type) {
      case "sender":
        senderSocket = ws;
        break;

      case "receiver":
        receiverSocket = ws;
        break;

      case "createOffer":
        if (ws === senderSocket) {
          receiverSocket?.send(
            JSON.stringify({ type: "createOffer", sdp: message.sdp })
          );
        }
        break;

      case "createAnswer":
        if (ws === receiverSocket) {
          senderSocket?.send(
            JSON.stringify({ type: "createAnswer", sdp: message.sdp })
          );
        }
        break;

      case "iceCandidate":
        if (ws === senderSocket) {
          receiverSocket?.send(
            JSON.stringify({
              type: "iceCandidate",
              candidate: message.candidate,
            })
          );
        } else if (ws === receiverSocket) {
          senderSocket?.send(
            JSON.stringify({
              type: "iceCandidate",
              candidate: message.candidate,
            })
          );
        }
        break;

      default:
        console.warn("Unknown message type:", message.type);
    }
  });
});
