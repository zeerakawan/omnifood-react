import "./Hero.styles.css";

import TestimonialImg from "../testimonialImgs/TestimonialImg.component";
import Anchor from "../anchor/anchor.component";
import HeadingPrimary from "../HTML Elements/HeadingPrimary.component";
import Paragraph from "../HTML Elements/Paragraph.component";
import HeroImage from "../../assets/img/hero-min.png";
import { testimonialImages } from "../imported pictures/importedPictures";

const Hero = () => {
  // STICKY NAVIGATION
  // const sectionHeroElement = document.querySelector(".section-hero");

  // const obs = new IntersectionObserver(
  //   function (entries) {
  //     const ents = entries[0];

  //     if (!ents.isIntersecting) {
  //       document.body.classList.add("sticky");
  //     }
  //     if (ents.isIntersecting) {
  //       document.body.classList.remove("sticky");
  //     }
  //   },
  //   {
  //     // IN the viewport
  //     root: null,
  //     threshold: 0,
  //     rootMargin: "-80px",
  //   }
  // );
  // obs.observe(sectionHeroElement);

  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <HeadingPrimary
            className="heading-primary"
            text="A healthy meal delivered to your door, every single day"
          />
          <Paragraph
            className="hero-description"
            text="The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs."
          />
          <Anchor
            href="#cta"
            className="btn btn--full margin-right-sm"
            text={"Start eating well"}
          ></Anchor>
          <Anchor
            href="#how"
            className="btn btn--outline"
            text={`Learn more`}
          ></Anchor>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <TestimonialImg images={testimonialImages} alt="customer" />
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
