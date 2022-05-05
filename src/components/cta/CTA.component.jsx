import "./CTA.styles.css";

const CTA = () => {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" name="sign up">
              <div>
                <label htmlFor="full-name">Full name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Jason Smith"
                  name="full-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear about us?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="facebook">Facebook(META) ad</option>
                  <option value="podcast">Podcast</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying her food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
