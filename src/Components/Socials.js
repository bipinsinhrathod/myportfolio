import React from "react";
import { social } from "../data";

const Socials = () => {
  return (
    <>
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center hover:scale-150 transition-all duration-500 text-accent"
              key={index}
            >
              <a target="_blank" className="text-base " href={item.href}>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Socials;
