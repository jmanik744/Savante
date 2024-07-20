import React from 'react';
import '../Influencerpage/style.css';

const InfluencerSignUp = () => {
  return (
    <div className="sign-up-page">
      <header>
        <h1>Influencer Sign Up</h1>
      </header>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Instagram Handle</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Content Niche</label>
          <select>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Health</option>
            <option>Technology</option>
          </select>
        </div>
        <div className="form-group">
          <label>Followers Count</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Audience Description</label>
          <textarea placeholder="Describe your audience..."></textarea>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default InfluencerSignUp;
