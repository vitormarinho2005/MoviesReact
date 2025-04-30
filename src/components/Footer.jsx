import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 MovieDB. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
