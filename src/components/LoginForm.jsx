import { useState } from 'react';
import axios from 'axios';

const projectID = 'a932caf0-1a1f-41ed-b482-99a2a8488240';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <>
      <div className="wrapper">
        {/* <img src="https://www.vervelogic.com/images/vl-page/vl-chat-application/vl-chat-application.png" alt="" /> */}
        <img src="https://assets.materialup.com/uploads/9e03d450-773c-4529-a326-0a899ec6c530/preview.gif" height="700px" width="400px" alt="chat-gif" />
        <div className="form" style={{ boxShadow: '6px 6px 20px rgb(0 0 0 / 0.2)', padding: '10px' }}>
          <h1 className="title animate-charcter">KIIT Chat</h1>
          <form onSubmit={handleSubmit}>
            <input style={{ borderRadius: '20px' }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Enter your Username" required />
            <input style={{ borderRadius: '20px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Enter your Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1>{error}</h1>
        </div>
      </div>
    </>
  );
};

export default Modal;
