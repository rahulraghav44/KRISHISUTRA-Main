import React from 'react';
import { Link } from 'react-router-dom';
import ProductPage from '../Product/ProductPage';

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: `url("frontend/public/media/signupPageBg.png")`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        
      }}
    >
      <div style={{
        width: '380px',
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        padding: '40px 30px',
        textAlign: 'center',
        position: 'relative',
        borderTop: '4px solid #0078D7',
      }}>
        <div style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '13px', color: '#444' }}>
          English ▼
        </div>
        <h2 style={{ marginBottom: '20px' }}>Sign in to your account</h2>

        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <label>Email</label>
          <input type="email" style={inputStyle} />
        </div>
        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <label>Password</label>
          <input type="password" style={inputStyle} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          fontSize: '13px'
        }}>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" style={{ color: '#0078D7', textDecoration: 'none' }}>Forgot Password?</a>
        </div>

        
        <Link to="/product"><button style={signInBtnStyle}>Sign In</button> </Link>

        <div style={{ margin: '20px 0', borderTop: '1px solid #ddd' }}></div>

        <p style={{ marginBottom: '10px', fontSize: '14px' }}>Or sign in with</p>
        <button style={googleBtnStyle}>
          <span style={{ marginRight: '10px' }}>G</span> Google
        </button>

        <p style={{ fontSize: '13px', marginTop: '30px' }}>
          New user? <a href="#" style={{ color: '#0078D7' }}>Register</a>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  boxSizing: 'border-box',
};

const signInBtnStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  fontWeight: 'bold',
  cursor: 'pointer',
  margin:"0 5rem 0 0"
};

const googleBtnStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  backgroundColor: 'black',
  cursor: 'pointer',
  fontWeight: '500',
  margin:"0 5rem 0 0"
};




export default Signup;