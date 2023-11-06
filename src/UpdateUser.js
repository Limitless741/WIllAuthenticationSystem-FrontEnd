// // UpdateUser.js
// import React, { useState } from 'react';

// function UpdateUser() {
//   const [formData, setFormData] = useState({
//     name: '',
//     id: '',
//     pdfFile: null,
//     nomineeList: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       pdfFile: file,
//     });
//   };

//   const handleAddNominee = () => {
//     setFormData({
//       ...formData,
//       nomineeList: [...formData.nomineeList, { nomineeName: '', nomineeId: '' }],
//     });
//   };

//   const handleNomineeChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedNominees = [...formData.nomineeList];
//     updatedNominees[index][name] = value;
//     setFormData({
//       ...formData,
//       nomineeList: updatedNominees,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, you can send the data to your server or perform any other action.
//     console.log(formData);
//   };

//   return (
//     <div>
//       <h2>Update User Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>ID:</label>
//           <input type="text" name="id" value={formData.id} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Upload PDF File:</label>
//           <input type="file" accept=".pdf" name="pdfFile" onChange={handleFileChange} />
//         </div>
//         <div>
//           <h3>Nominee List</h3>
//           {formData.nomineeList.map((nominee, index) => (
//             <div key={index}>
//               <label>Nominee Name:</label>
//               <input
//                 type="text"
//                 name="nomineeName"
//                 value={nominee.nomineeName}
//                 onChange={(e) => handleNomineeChange(index, e)}
//               />
//               <label>Nominee ID:</label>
//               <input
//                 type="text"
//                 name="nomineeId"
//                 value={nominee.nomineeId}
//                 onChange={(e) => handleNomineeChange(index, e)}
//               />
//             </div>
//           ))}
//           <button type="button" onClick={handleAddNominee}>
//             Add Nominee
//           </button>
//         </div>
//         <button type="submit">Update User</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateUser;

// import React, { useState } from 'react';

// function UpdateUser() {
//   const [formData, setFormData] = useState({
//     name: '',
//     id: '',
//     pdfFile: null,
//     nomineeList: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       pdfFile: file,
//     });
//   };

//   const handleAddNominee = () => {
//     // Check if there is no nominee in the list
//     if (formData.nomineeList.length === 0) {
//       setFormData({
//         ...formData,
//         nomineeList: [{ nomineeName: '', nomineeId: '' }],
//       });
//     }
//   };

//   const handleNomineeChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedNominees = [...formData.nomineeList];
//     updatedNominees[index][name] = value;
//     setFormData({
//       ...formData,
//       nomineeList: updatedNominees,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, you can send the data to your server or perform any other action.
//     console.log(formData);
//   };

//   return (
//     <div>
//       <h2>Update User Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>ID:</label>
//           <input type="text" name="id" value={formData.id} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Upload PDF File:</label>
//           <input type="file" accept=".pdf" name="pdfFile" onChange={handleFileChange} />
//         </div>
//         <div>
//           <h3>Nominee List</h3>
//           {formData.nomineeList.map((nominee, index) => (
//             <div key={index}>
//               <label>Nominee Name:</label>
//               <input
//                 type="text"
//                 name="nomineeName"
//                 value={nominee.nomineeName}
//                 onChange={(e) => handleNomineeChange(index, e)}
//               />
//               <label>Nominee ID:</label>
//               <input
//                 type="text"
//                 name="nomineeId"
//                 value={nominee.nomineeId}
//                 onChange={(e) => handleNomineeChange(index, e)}
//               />
//             </div>
//           ))}
//           <button type="button" onClick={handleAddNominee}>
//             Add Nominee
//           </button>
//         </div>
//         <button type="submit">Update User</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateUser;

import React, { useState } from 'react';

function UpdateUser() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    pdfFile: null,
    nomineeList: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    // Check if there is no nominee or only one nominee
    if (formData.nomineeList.length < 2) {
      setFormData({
        ...formData,
        nomineeList: [...formData.nomineeList, { nomineeName: '', nomineeId: '' }],
      });
    }
  };

  const handleDeleteNominee = (index) => {
    const updatedNominees = [...formData.nomineeList];
    updatedNominees.splice(index, 1);
    setFormData({
      ...formData,
      nomineeList: updatedNominees,
    });
  };

  const handleNomineeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNominees = [...formData.nomineeList];
    updatedNominees[index][name] = value;
    setFormData({
      ...formData,
      nomineeList: updatedNominees,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the data to your server or perform any other action.
    console.log(formData);
  };

  return (
    <div>
      <h2>Update User Page</h2>
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
          <label>Upload PDF File:</label>
          <input type="file" accept=".pdf" name="pdfFile" onChange={handleFileChange} />
        </div>
        <div>
          <h3>Nominee List</h3>
          {formData.nomineeList.map((nominee, index) => (
            <div key={index}>
              <label>Nominee Name:</label>
              <input
                type="text"
                name="nomineeName"
                value={nominee.nomineeName}
                onChange={(e) => handleNomineeChange(index, e)}
              />
              <label>Nominee ID:</label>
              <input
                type="text"
                name="nomineeId"
                value={nominee.nomineeId}
                onChange={(e) => handleNomineeChange(index, e)}
              />
              <button type="button" onClick={() => handleDeleteNominee(index)}>
                Delete Nominee
              </button>
            </div>
          ))}
          {formData.nomineeList.length < 2 && (
            <button type="button" onClick={handleAddNominee}>
              Add Nominee
            </button>
          )}
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
