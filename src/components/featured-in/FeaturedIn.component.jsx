import "./FeaturedIn.styles.css";

import TechcrunchLogo from "../../assets/img/logos/techcrunch.png";
import BusinessInsiderLogo from "../../assets/img/logos/business-insider.png";
import NYTLogo from "../../assets/img/logos/the-new-york-times.png";
import ForbesLogo from "../../assets/img/logos/forbes.png";
import USAToday from "../../assets/img/logos/usa-today.png";

const FeaturedIn = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="featured-logos">
          <img src={TechcrunchLogo} alt="Techcrunch Logo" />
          <img src={BusinessInsiderLogo} alt="Business Insider Logo" />
          <img src={NYTLogo} alt="The New York Times Logo" />
          <img src={ForbesLogo} alt="Forbes Logo" />
          <img src={USAToday} alt="USA Today" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
