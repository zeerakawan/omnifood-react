import Hero from "./components/hero/Hero.component";
import FeaturedIn from "./components/featured-in/FeaturedIn.component";
import HowItWorks from "./components/how it works/HowItWorks.component";
import Meals from "./components/meals/Meals.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
    </div>
  );
};

export default App;
