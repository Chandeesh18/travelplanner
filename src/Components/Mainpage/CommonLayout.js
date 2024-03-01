import React from 'react';

function CommonLayout({ children }) {
  return (
    <div className="common-layout">
      {/* Content for the common layout (e.g., logo, navigation) */}
      <h1>Welcome to A2Z Planner</h1>
      {/* Other common content */}
      {children}
    </div>
  );
}

export default CommonLayout;
