import React from 'react';

function Toolbarbar({ documentName, onDocumentNameChange }) {
  const handleDocumentNameChange = (event) => {
    onDocumentNameChange(event.target.value);
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        className="document-name"
        value={documentName}
        onChange={handleDocumentNameChange}
      />
      <div className="formatting-options">
        {/* Add formatting options buttons */}
        <button>File</button>
        <button>Edit</button>
        <button>View</button>
        
        <button>Insert</button>
        
        <button>Format</button>
        
        <button>Tools</button>
        
        <button>Extension</button>
        
        <button>Help</button>
      </div>
      <div className="share-button">
        <button>Share</button>
      </div>
    </div>
  );
}

export default Toolbarbar;