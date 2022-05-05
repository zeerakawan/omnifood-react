import "./Hero.styles.css";

import HeroImage from "../../assets/img/hero-min.png";
import testimonialCustomer1 from "../../assets/img/customers/customer-1.jpg";
import testimonialCustomer2 from "../../assets/img/customers/customer-2.jpg";
import testimonialCustomer3 from "../../assets/img/customers/customer-3.jpg";
import testimonialCustomer4 from "../../assets/img/customers/customer-4.jpg";
import testimonialCustomer5 from "../../assets/img/customers/customer-5.jpg";
import testimonialCustomer6 from "../../assets/img/customers/customer-6.jpg";

const Hero = () => {
  // STICKY NAVIGATION
  const sectionHeroElement = document.querySelector(".section-hero");

  const obs = new IntersectionObserver(
    function (entries) {
      const ents = entries[0];

      if (!ents.isIntersecting) {
        document.body.classList.add("sticky");
      }
      if (ents.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // IN the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroElement);

  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={testimonialCustomer1} alt="Customer" />
              <img src={testimonialCustomer2} alt="Customer" />
              <img src={testimonialCustomer3} alt="Customer" />
              <img src={testimonialCustomer4} alt="Customer" />
              <img src={testimonialCustomer5} alt="Customer" />
              <img src={testimonialCustomer6} alt="Customer" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <img src={HeroImage} className="hero-img" alt="Hero" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
