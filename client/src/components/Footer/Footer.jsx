import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Recipe Pro Builder</p>
        <div className="footer-links">
          <a href="https://github.com/KevalPatel6/Recipe-Builder-Pro">GitHub</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
