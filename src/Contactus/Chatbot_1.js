import React from 'react'
import './Chatbot_1.css'

export default function Chatbot_1() {
    const chatIcon = document.querySelector('.chatbot-icon');
const chatContainer = document.getElementById('chat-container');
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatbotMessage = document.getElementById('chatbot-message');

const predefinedAnswers = {
    'What is your name?': 'My name is Chatbot.',
    'How are you?': 'I am doing well, thank you!',
    'What is the weather today?': 'I am sorry, I am not able to provide weather information.',
};

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = `${sender}: ${message}`;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value;

    displayMessage(message, 'user');

    messageInput.value = '';

    if (predefinedAnswers.hasOwnProperty(message)) {
        const answer = predefinedAnswers[message];
        displayMessage(answer, 'bot');
    } else {
        sendToServer(message);
    }
}

function sendToServer(message) {
    const response = generateChatbotResponse(message);

    displayMessage(response, 'bot');
}

function generateChatbotResponse(message) {
    return `I'm sorry, I don't have a predefined answer for that question. Please ask another question.`;
}

function toggleChatbox() {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}

if(sendButton){
sendButton.addEventListener('click', sendMessage);
}

if(messageInput){
messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
}
  return (
    <div>
      <div className="chatbot-icon" onClick={toggleChatbox}>
        <span>&#128172;</span>
    </div>

    <div className="chat-container" id="chat-container">
        <div id="message-container">
    
            <div className="message bot-message">How can I help you?</div>
        </div>
        <div id="input-container">
            <input type="text" id="message-input" placeholder="Type your message..." />
            <button id="send-button">Send</button>
        </div>
    </div>


    <div className="chatbot-message" id="chatbot-message">
        How can I help you?
    </div>
    </div>
  )
}
