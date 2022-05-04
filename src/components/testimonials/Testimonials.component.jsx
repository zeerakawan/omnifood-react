import "./Testimonials.styles.css";

import FoodPicture from "../../assets/img/gallery/gallery-1.jpg";
import FoodPicture2 from "../../assets/img/gallery/gallery-2.jpg";
import FoodPicture3 from "../../assets/img/gallery/gallery-3.jpg";
import FoodPicture4 from "../../assets/img/gallery/gallery-4.jpg";
import FoodPicture5 from "../../assets/img/gallery/gallery-5.jpg";
import FoodPicture6 from "../../assets/img/gallery/gallery-6.jpg";
import FoodPicture7 from "../../assets/img/gallery/gallery-7.jpg";
import FoodPicture8 from "../../assets/img/gallery/gallery-8.jpg";
import FoodPicture9 from "../../assets/img/gallery/gallery-9.jpg";
import FoodPicture10 from "../../assets/img/gallery/gallery-10.jpg";
import FoodPicture11 from "../../assets/img/gallery/gallery-11.jpg";
import FoodPicture12 from "../../assets/img/gallery/gallery-12.jpg";

import Customer1 from "../../assets/img/customers/dave.jpg";
import Customer2 from "../../assets/img/customers/ben.jpg";
import Customer3 from "../../assets/img/customers/steve.jpg";
import Customer4 from "../../assets/img/customers/hannah.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back!
        </h2>
        <div className="testimonials">
          {/* <!-- CUSTOMER 1 --> */}
          <figure className="testimonial">
            <img
              src={Customer1}
              className="testimonial-img"
              alt="Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-author">&mdash; Dave Bryson</p>
          </figure>

          {/* <!-- CUSTOMER 2 --> */}
          <figure className="testimonial">
            <img src={Customer2} className="testimonial-img" alt="Ben Hadley" />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-author">&mdash; Ben Hadley</p>
          </figure>

          {/* <!-- CUSTOMER 3 --> */}
          <figure className="testimonial">
            <img
              src={Customer3}
              className="testimonial-img"
              alt="Steve Miller"
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-author">&mdash; Steve Miller</p>
          </figure>

          {/* <!-- CUSTOMER 4 --> */}
          <figure className="testimonial">
            <img
              src={Customer4}
              className="testimonial-img"
              alt="Hannah Smith"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-author">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={FoodPicture} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture2} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture3} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture4} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture5} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture6} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture7} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture8} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture9} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture10} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture11} alt="Food Pictures" />
        </figure>
        <figure className="gallery-item">
          <img src={FoodPicture12} alt="Food Pictures" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
