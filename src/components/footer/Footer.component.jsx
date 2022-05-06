import "./Footer.styles.css";

import FooterLogo from "../../assets/img/omnifood-logo.png";
import IonIcon from "../ionicon/IonIcon.component";
import Logo from "../logo/Logo.component";
import List from "../list/List.component";
import Anchor from "../anchor/anchor.component";

const socialLinkList = [
  {
    name: "instagram",
  },
  {
    name: "facebook",
  },
  {
    name: "twitter",
  },
];

const accountLinkList = [
  {
    item: "create Account",
  },
  {
    item: "Sign In",
  },
  {
    item: "iOS App",
  },
  {
    item: "Android App",
  },
];

const companyLinkList = [
  {
    item: "About Omnifood",
  },
  {
    item: "For Business",
  },
  {
    item: "Cooking partners",
  },
  {
    item: "Careers",
  },
];

const resourcesListLink = [
  {
    item: "Reciepe directory",
  },
  {
    item: "Help center",
  },
  {
    item: "Privacy & Terms",
  },
];

const renderSocialLinkList = socialLinkList.map((list) => {
  return (
    <List className="footer-link" href="#footer">
      <IonIcon className="social-icon" name={`logo-${list.name}`}></IonIcon>
    </List>
  );
});

const renderCompanyLinkList = companyLinkList.map((list) => {
  return (
    <List className="footer-link" href="#footer">
      {list.item}
    </List>
  );
});
const renderAccountLinkList = accountLinkList.map((list) => {
  return (
    <List className="footer-link" href="#footer">
      {list.item}
    </List>
  );
});
const renderResourcesLinkList = resourcesListLink.map((list) => {
  return (
    <List className="footer-link" href="#footer">
      {list.item}
    </List>
  );
});

const Footer = () => {
  // TO UPDATE THE CURRENT YEAR IN FOOTER SECTION
  const currentYear = new Date().getFullYear();
  const copyrightText = `Copyright © ${currentYear} by Omnifood, LLC. All rights reserved.`;

  return (
    <footer className="footer" id="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Logo
            href="#logo"
            className="logo"
            alt="omnifood-logo"
            src={FooterLogo}
          />

          <ul className="social-links" style={{ paddingTop: "24px" }}>
            {renderSocialLinkList}
          </ul>

          <p className="copyright">{copyrightText}</p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contact-info">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Anchor className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </Anchor>
              <Anchor className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </Anchor>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">{renderAccountLinkList}</ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">{renderCompanyLinkList}</ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">{renderResourcesLinkList}</ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
