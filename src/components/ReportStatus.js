import React, { useState } from 'react';
import '../styles/ReportStatus.css';

const ReportStatus = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReport = async () => {
    if (!status) {
      alert('Please select a status before reporting.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'JohnDoe', // Replace later with dynamic
          status,
          location: 'Beirut', // kamen this
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Status reported successfully!');
      } else {
        console.error('Backend Error:', data);
        alert(`Failed to report status: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      alert('Failed to report status. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-status">
      <h3>Report Status</h3>
      <select
        className="status-dropdown"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      >
        <option value="">Select Status</option>
        <option value="Power On">Power On</option>
        <option value="Power Off">Power Off</option>
      </select>
      <button onClick={handleReport} disabled={loading}>
        {loading ? 'Reporting...' : 'Report Status'}
      </button>
    </div>
  );
};

export default ReportStatus;
