import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import FeaturedIn from "./components/featured-in/FeaturedIn.component";
import HowItWorks from "./components/how it works/HowItWorks.component";
import Meals from "./components/meals/Meals.component";
import Testimonials from "./components/testimonials/Testimonials.component";
import Pricing from "./components/pricing/Pricing.component";
import CTA from "./components/cta/CTA.component";
import Footer from "./components/footer/Footer.component";

import "./scripts/script";

import "./scripts/responsive-queries.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
