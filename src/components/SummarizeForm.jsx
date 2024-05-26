import React, { useState } from 'react';
import axios from 'axios';

function SummarizeForm() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/summarize', { url });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing the URL', error);
      setSummary("Opps! can't provide summary of this URL. Enter URL which have text content that can be summarized, e.g, Wikipedia page")
    }
  };

  return (
    <div>
      <h1>Summarize Website</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          required
        />
        <button type="submit">Summarize</button>
      </form>
      {summary && (
        <div>
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SummarizeForm;
