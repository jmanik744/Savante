import React,{useState} from 'react';
import './style.css';
import '../Brandpage';


const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="landing-page">
      <nav>
        <div className="brand"><h1>Savante</h1></div>
        <div className="nav-content">
          <h3>Home</h3>
          <h3>Testinomials</h3>
          <h3><button onClick={handleLoginClick}>Login</button></h3>
        </div>
      </nav>
      <header className="hero-section">
        <h1>Generative AI for Your <br /> Brand and Influencers.</h1>
        <p>Reimagine the way we do branding and influencer reach out, try out our State of the Art <br /> Solution for findings influencers you always wanted but couldn't
        </p>
        <button>Get Started</button>
      </header>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Savante is an upcoming Influencer AI Tech Company which is going to solve  the<br /> two biggest problems of the Influencer Marketing Industry, Influencer Discovery <br /> and Return on Investment and while providing the end to end journey for any kind<br />  of interaction between Influencers and Brands.</p>
      </section>
      {/* <section className="features">
        <h2>Features</h2>
        <div className="feature-item">Feature 1</div>
        <div className="feature-item">Feature 2</div>
        <div className="feature-item">Feature 3</div>
      </section> */}
      <h2>Testinomials</h2>
      <section className="testimonials">
        <div className="testimonial-item1"></div>
        <div className="testimonial-item2"></div>
        <div className="testimonial-item3"></div>
        <div className="testimonial-item4"></div>
      </section>
      <footer className="cta-section">
        <h2>Ready to Get Started?</h2>
        <button>Sign Up Now</button>
      </footer>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Register</h2>
            <label htmlFor="">I am a</label>
            <button onClick={() => window.location.href = '/signup/brand'}>Brand</button>
            <button onClick={() => window.location.href = '/signup/influencer'}>Influencer</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
