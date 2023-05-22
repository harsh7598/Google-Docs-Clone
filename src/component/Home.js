import React from 'react'
import { useState } from 'react';
import Toolbar from './Toolbarbar';
import Sidebar from './Sidebar';
import Toolbarbar from './Toolbarbar';


function Home () {
  const [documentName, setDocumentName] = useState('Document Name');
  const [content, setContent] = useState('');

  const handleDocumentNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <> 
    <Sidebar/>
    <div>
    <Toolbarbar/>
    
    <div className="text-editor">
    
    
    <div className="toolbar">
      <input
        type="text"
        className="document-name"
        value={documentName}
        onChange={handleDocumentNameChange}
      />
      <div className="formatting-options">
        {/* Add formatting options buttons */}
      </div>
      <div className="share-button">
        <button>Share</button>
      </div>
    </div>
    <div className="editor-content">
      <div className="editor-overlay" />
      <textarea
        className="editor-textarea"
        value={content}
        onChange={handleContentChange}
      />
    </div>
  </div>
  
  </div>
  
  </>
   
  )
}

export default  Home;