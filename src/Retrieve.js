import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function Retrieve() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [searchId, setSearchId] = useState('');
  const [searchNomineeId, setSearchNomineeId] = useState('');
  const [foundPdf, setFoundPdf] = useState(null);

  const handleSearch = () => {
    // Check if the entered ID or Nominee ID match the stored data
    if (formData) {
      const matchingNominee = formData.nominees.find(
        (nominee) => nominee.nomineeId === searchNomineeId
      );

      if (
        (formData.id === searchId && formData.pdfFile) ||
        (matchingNominee && matchingNominee.pdfFile)
      ) {
        setFoundPdf(formData.pdfFile || (matchingNominee && matchingNominee.pdfFile) || null);
      } else {
        setFoundPdf(null);
      }
    } else {
      setFoundPdf(null);
    }
  };

  return (
    <div>
      <h2>Retrieve Page</h2>
      <div>
        <label>ID:</label>
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </div>
      <div>
        <label>Nominee ID:</label>
        <input
          type="text"
          value={searchNomineeId}
          onChange={(e) => setSearchNomineeId(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Retrieve PDF</button>

      {foundPdf ? (
        <div>
          <p>PDF File Details:</p>
          <p>Name: {foundPdf.name}</p>
          <a href={URL.createObjectURL(foundPdf)} download={foundPdf.name}>
            Download PDF
          </a>
        </div>
      ) : (
        <p>No match found. Please check your ID or Nominee ID.</p>
      )}
    </div>
  );
}

export default Retrieve;
