import classes from "./App.module.css";
import Testimonial from "./Components/Testimonial";
import testimonials from "./db/testimonials";

function App() {
  return (
    <section className={classes.container}>
      <Testimonial testimonials={testimonials} />
    </section>
  );
}

export default App;
