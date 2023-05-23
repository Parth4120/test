// import React from 'react'
// import { useState } from 'react';
// import './Chatbot.css'
// import chatbotimg from './chatbotimg.jpg'
// export default function Chatbot() {


// const Chatbot = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'How can I help you?' }
//   ]);
//   const [inputValue, setInputValue] = useState('');

//   const predefinedAnswers = {
//     'What is your name?': 'My name is Chatbot.',
//     'How are you?': 'I am doing well, thank you!',
//     'What is the weather today?': 'I am sorry, I am not able to provide weather information.',
//     'hii':'hello'
//     // Add more predefined questions and answers as needed
//   };

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const sendMessage = () => {
//     const message = { sender: 'user', text: inputValue };
//     setMessages([...messages, message]);
//     setInputValue('');

//     if (predefinedAnswers.hasOwnProperty(message.text)) {
//       const answer = predefinedAnswers[message.text];
//       const botReply = { sender: 'bot', text: answer };
//       setMessages([...messages, botReply]);
//     } else {
//       // Send message to server-side for processing (replace with your server endpoint)
//       sendToServer(message.text);
//     }
//   };

//   const sendToServer = (message) => {
//     // Simulate server response (replace with your server-side implementation)
//     const response = generateChatbotResponse(message);
//     const botReply = { sender: 'bot', text: response };
//     setMessages([...messages, botReply]);
//   };

//   const generateChatbotResponse = (message) => {
//     // Implement your server-side AI logic here
//     // You can make an HTTP request to your server or use WebSockets to communicate with the server-side code.
//     // The server-side code should handle the NLP processing and generate the appropriate response.
//     // This example uses a simple response echoing the message back.
//     return `I'm sorry, I don't have a predefined answer for that question. Please ask another question.`;
//   };

//   return (
//     <div className="chatbot">
//       {isChatOpen && (
//         <div className="chat-container">
//           <div className="message-container">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.sender}`}>
//                 {message.text}
//               </div>
//             ))}
//           </div>
//           <div className="input-container">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               placeholder="Type your message..."
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}

//       <div className="chatbot-icon" onClick={toggleChat}>
//         {/* <span>&#128172;</span> */}
//         <img className='chatbot-img' src={chatbotimg} alt="" />
//       </div>

//       {!isChatOpen && (
//         <div className="chatbot-message">
//           How can I help you?
//         </div>
//       )}
//     </div>
//   );
// };


//   return (
//     <div>



//  <div>
//    <Chatbot/>
//    </div>



//     </div>
//   )
// }





