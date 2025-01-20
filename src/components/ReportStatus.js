
import '../styles/ReportStatus.css';

// function ReportStatus() {
//   return (
//     <div className="report-status">
//       <h3>Report Status</h3>
//       <button>Report Power Outage</button>
//       <button>Report Power Availability</button>
//     </div>
//   );
// }

// export default ReportStatus;
import React, { useState } from 'react';

const ReportStatus = () => {
  const [status, setStatus] = useState('');
 

  const handleReport = async () => {
 
    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'JohnDoe', status, location: 'Beirut' }),
      });

      if (response.ok) {
        alert('Status reported successfully!');
      } else {
        alert('Error reporting status');
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="report-status">
      <select className="status-dropdown" onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">Select Status</option>
        <option value="Power On">Power On</option>
        <option value="Power Off">Power Off</option>
      </select>
      <button onClick={handleReport}>Report Status</button>
    </div>
  );
};

export default ReportStatus;
