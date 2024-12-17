# WebRTC Learning Repository

This repository serves as a practical guide for understanding and implementing WebRTC (Web Real-Time Communication) technology. WebRTC enables real-time audio, video and data sharing directly between browsers and mobile applications without the need for plugins or additional software. [Learn more about WebRTC](https://webrtc.org/)

## Repository Structure

- **backend/**: Contains server-side code responsible for signaling and managing connections between peers.

- **frontend/**: Includes client-side code that interfaces with the user's browser to capture media, establish peer connections and handle user interactions.

## Key Concepts

- **getUserMedia()**: Acquires access to the user's media devices such as camera and microphone to capture audio and video streams.

- **RTCPeerConnection**: Manages the full life cycle of a connection to another peer, handling tasks like creating offers, answers and maintaining the connection.

- **RTCDataChannel**: Facilitates the exchange of arbitrary data directly between peers enabling functionalities like text chat or file transfer.

## Getting Started

To explore the functionalities:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/aaryan182/webRTC-Learning.git

2. **Navigate to the Backend Directory**:
   
   ```bash
   cd webRTC-Learning/backend

3. **Install Dependencies**: Ensure you have Node.js installed, then run:
   
   ```bash
   npm install
4. **Start the Signaling Server**:
   
   ```bash
   npm start

Test the Application:

Open the application in multiple browser tabs or different devices to initiate peer-to-peer connections and experience real-time communication.
