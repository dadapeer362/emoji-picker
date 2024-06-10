// src/components/EmojiTextBox.js
import React, { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import './EmojiTextBox.css'

const EmojiTextBox = () => {
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const addEmoji = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
  };

  return (
    <div className='item-center' style={{ height: '100vh' }}>
      <div style={{display:'flex', border: '1px solid black', borderRadius: '10px', padding: '2px'}}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={{border: 'none', outline: 'none'}}
        />
        <div className='item-center'>
          <button
            onClick={() => setShowPicker((prev) => !prev)}
            style={{fontSize: '20px', border: 'none', cursor: 'pointer', backgroundColor: 'transparent'}}
          >
            {'😂'}
          </button>
        </div>
        {showPicker && (
          <div style={{ position: 'absolute', zIndex: '1', bottom: '50px', right: '160px' }}>
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiTextBox;
