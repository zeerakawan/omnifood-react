import "./FeaturedIn.styles.css";

import { FeaturedInImages } from "../imported pictures/importedPictures";
import TestimonialImg from "../testimonialImgs/TestimonialImg.component";

const FeaturedIn = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="featured-logos">
          <TestimonialImg images={FeaturedInImages} alt="FeaturedIn" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
