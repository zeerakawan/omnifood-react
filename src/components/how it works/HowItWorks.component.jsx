import "./HowItWorks.styles.css";

import ScreenForStep1 from "../../assets/img/app/app-screen-1.png";
import ScreenForStep2 from "../../assets/img/app/app-screen-2.png";
import ScreenForStep3 from "../../assets/img/app/app-screen-3.png";

const HowItWorks = () => {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/* STEP 01  */}
        <div className="step-text-box">
          <div className="step-number">01</div>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={ScreenForStep1}
            className="step-img"
            alt="Screen for selecting food preference "
          />
        </div>

        {/* <!-- STEP 02 --> */}
        <div className="step-img-box">
          <img
            src={ScreenForStep2}
            className="step-img"
            alt="Screen for selecting food preference "
          />
        </div>
        <div className="step-text-box">
          <div className="step-number">02</div>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* <!-- STEP 03 --> */}
        <div className="step-text-box">
          <div className="step-number">03</div>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={ScreenForStep3}
            className="step-img"
            alt="Screen for food deliery time"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
