import React from 'react';
import '../Brandpage/style.css';

const BrandSignUp = () => {
  return (
    <div className="sign-up-page">
      <header>
        <h1>Brand Sign Up</h1>
      </header>
      <form>
        <div className="form-group">
          <label>Brand Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Website URL</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Instagram Handle</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Niche/Industry</label>
          <select>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Health</option>
            <option>Technology</option>
          </select>
        </div>
        <div className="form-group">
          <label>Company Size</label>
          <select>
            <option>Startup</option>
            <option>Small</option>
            <option>Mid</option>
            <option>Large</option>
          </select>
        </div>
        <div className="form-group">
          <label>Brand Description</label>
          <textarea placeholder="Describe your brand..."></textarea>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default BrandSignUp;
