import "./Footer.styles.css";

import FooterLogo from "../../assets/img/omnifood-logo.png";

const Footer = () => {
  // TO UPDATE THE CURRENT YEAR IN FOOTER SECTION
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#logo" className="footer-logo">
            <img src={FooterLogo} className="logo" alt="Omnifood Logo" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#footer">
                <ion-icon
                  className="social-icon"
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                <ion-icon
                  className="social-icon"
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                <ion-icon
                  className="social-icon"
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; <span className="year">{currentYear}</span> by
            Omnifood, LLC. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contact-info">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#footer">
                Create Account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#footer">
                About Omnifood{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                For Business{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Cooking partners{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#footer">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Help center{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#footer">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
