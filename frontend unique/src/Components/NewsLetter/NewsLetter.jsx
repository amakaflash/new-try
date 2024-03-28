import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the email subscription logic here
    console.log('Email subscribed:', email);
    // Reset the email field or give user feedback
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailInput" className="visually-hidden">Email address</label>
        <input 
          id="emailInput"
          type="email" 
          placeholder='Your Email id' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;

