import React, { useState } from 'react';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    nominees: [
      { nomineeName: '', nomineeId: '' },
      { nomineeName: '', nomineeId: '' },
    ],
    pdfFile: null,
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNomineeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNominees = [...formData.nominees];
    updatedNominees[index][name] = value;
    setFormData({
      ...formData,
      nominees: updatedNominees,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      pdfFile: file,
    });
  };

  const handleAddNominee = () => {
    if (formData.nominees.length < 2) {
      setFormData({
        ...formData,
        nominees: [...formData.nominees, { nomineeName: '', nomineeId: '' }],
      });
    }
  };

  const handleDeleteNominee = (index) => {
    if (formData.nominees.length > 1) {
      const updatedNominees = [...formData.nominees];
      updatedNominees.splice(index, 1);
      setFormData({
        ...formData,
        nominees: updatedNominees,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Redirect to the Retrieve page with the form data in the state
    Navigate('/retrieve', { state: { formData } });
  };

  return (
    <div>
      <h2>Add User Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div>
          <h3>Nominees</h3>
          {formData.nominees.map((nominee, index) => (
            <div key={index}>
              <label>Nominee Name:</label>
              <input
                type="text"
                name={`nomineeName${index}`}
                value={nominee[`nomineeName${index}`]}
                onChange={(e) => handleNomineeChange(index, e)}
              />
              <label>Nominee ID:</label>
              <input
                type="text"
                name={`nomineeId${index}`}
                value={nominee[`nomineeId${index}`]}
                onChange={(e) => handleNomineeChange(index, e)}
              />
              {index > 0 && (
                <button type="button" onClick={() => handleDeleteNominee(index)}>
                  Delete Nominee
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddNominee}
            style={{ display: formData.nominees.length < 2 ? 'block' : 'none' }}
          >
            Add Nominee
          </button>
        </div>
        <div>
          <label>Upload PDF File:</label>
          <input type="file" accept=".pdf" name="pdfFile" onChange={handleFileChange} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
