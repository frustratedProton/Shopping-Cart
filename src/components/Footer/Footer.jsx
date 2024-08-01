import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Shopping Cart</h2>
        <p>React Shopping cart made by Aryan.</p>
        <a href="https://github.com/frustratedProton" target="_blank" rel="noopener noreferrer">
          Visit my GitHub
        </a>

        <div className="social-icons">
          <a href="https://github.com/frustratedProton" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="fa-brands fa-github"></a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {currentYear} frustratedProton. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
