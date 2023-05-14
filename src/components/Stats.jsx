import React from "react";
import {stats} from "../constans";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className={`flex-1 flex justify-start items-center flex-row`}>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
