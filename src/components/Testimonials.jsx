import React from "react";
import {feedback} from "../constans";
import styles, {layout} from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      id="clients">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div
        className={`w-full flex sm:flex-row flex-col justify-between items-center sm:mb-16 mb-6 relative z-[1]`}>
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full sm:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container">
        {feedback.map((card, index) => {
          return <FeedbackCard key={card.id} {...card} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
