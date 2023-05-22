import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="https://docs.google.com">Google Docs</a>
      <a href="https://sheets.google.com">Google Sheets</a>
      <a href="https://slides.google.com">Google Slides</a>
      <a href="https://drive.google.com">Google Drive</a>
      {/* Add more links to other Google apps */}
    </div>
  );
}

export default Sidebar;