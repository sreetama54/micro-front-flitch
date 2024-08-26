import React, { useState } from 'react';

function MFA({ onVerify }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    if (otp === '123456') {
      onVerify(true);
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default MFA;
