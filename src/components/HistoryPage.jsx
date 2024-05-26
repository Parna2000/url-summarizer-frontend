import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching history', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Request History</h1>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <p><strong>URL:</strong> {entry.url}</p>
            <p><strong>Summary:</strong> {entry.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
