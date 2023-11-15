import React, { useState } from 'react';
import axios from 'axios';

const TextGenerationForm = () => {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleTextGeneration = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { text: inputText });
      console.log('API Response:', response.data);
      setGeneratedText(response.data.generated_text);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)', fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', color: 'white' }}>
      <h2 style={{ color: 'white', fontSize: '2rem' }}>Text Generation</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text..."
        style={{ padding: '10px', margin: '10px', width: '70%', fontSize: '16px', borderRadius: '5px', border: 'none' }}
      />
      <button onClick={handleTextGeneration} style={{ padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Generate Text</button>
      <div style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)' }}>
        <h3 style={{ color: '#4CAF50' }}>Generated Text:</h3>
        <textarea
          style={{ width: '100%', height: '100px', padding: '5px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          value={generatedText}
          readOnly
        />
      </div>
    </div>
  );
};

export default TextGenerationForm;
