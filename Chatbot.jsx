import { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/chat', { message });
    setResponse(res.data.response);
  };

  return (
    <div className="chatbox">
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask a question..." />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Chatbot;