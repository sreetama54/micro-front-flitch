import React, { useState } from 'react';
import Login from './Login';
import MFA from './MFA';
import Dashboard from './Dashboard';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMfaVerified, setIsMfaVerified] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleVerify = () => {
    setIsMfaVerified(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsMfaVerified(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : !isMfaVerified ? (
        <MFA onVerify={handleVerify} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default Home;
