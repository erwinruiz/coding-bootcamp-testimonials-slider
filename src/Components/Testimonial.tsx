import classes from "./Testimonial.module.css";
import { useState } from "react";
import { Testimonial as TestimonialType } from "../Types/types";

type TestimonialProps = {
  testimonials: TestimonialType[];
};

function Testimonial({ testimonials }: TestimonialProps) {
  const [index, setIndex] = useState(0);

  const previousTestimonialHandler = () => {
    setIndex((state) => {
      if (state === 0) {
        return testimonials.length - 1;
      } else {
        return state - 1;
      }
    });
  };

  const nextTestimonialHandler = () => {
    setIndex((state) => {
      if (state === testimonials.length - 1) {
        return 0;
      } else {
        return state + 1;
      }
    });
  };

  const photo = testimonials[index].photo;
  const testimonial = testimonials[index].testimonial;
  const name = testimonials[index].name;
  const occupation = testimonials[index].occupation;

  return (
    <div className={classes.testimonial}>
      <div className={classes.user}>
        <img className={classes["user-image"]} src={photo} alt="user" />
        <div className={classes["slider-container"]}>
          <div className={classes.slider}>
            <div
              className={classes["arrow-container"]}
              onClick={previousTestimonialHandler}
            >
              <img src="./images/icon-prev.svg" alt="arrow prev" />
            </div>
            <div
              className={classes["arrow-container"]}
              onClick={nextTestimonialHandler}
            >
              <img src="./images/icon-next.svg" alt="arrow next" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["testimonial-text"]}>
        <p>{testimonial}</p>
        <div className={classes["user-data"]}>
          <h1>{name}</h1>
          <h2>{occupation}</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
