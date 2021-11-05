import classes from "./Testimonial.module.css";

function Testimonial() {
  return (
    <div className={classes.testimonial}>
      <div className={classes.user}>
        <img
          className={classes["user-image"]}
          src="./images/image-tanya.jpg"
          alt="user"
        />
        <div className={classes["slider-container"]}>
          <div className={classes.slider}>
            <div className={classes["arrow-container"]}>
              <img src="./images/icon-prev.svg" alt="arrow prev" />
            </div>
            <div className={classes["arrow-container"]}>
              <img src="./images/icon-next.svg" alt="arrow next" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["testimonial-text"]}>
        <p>
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <div className={classes["user-data"]}>
          <h1>Tanya Sinclair</h1>
          <h2>UX Engineer</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
