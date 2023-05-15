import React from "react";
import {clients} from "../constans";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:w-[192px] w-[120px]`}>
              <img
                src={client.logo}
                alt="logo"
                className="sm:w-[192px] w-[100px] object-contain px-2 py-2 rounded-[12px] transition ease-out duration-500 hover:bg-dimWhite cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
