import React from 'react';

function CommonLayout({ children }) {
  return (
    <div className="common-layout">
      <h1>Welcome to A2Z Planner</h1>
      {children}
    </div>
  );
}

export default CommonLayout;
