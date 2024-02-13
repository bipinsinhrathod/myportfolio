import React from "react";

// import Image from "../assets/img/about.webp";

import Bipin from '../assets/b2.png'
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section id="about" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <img
              className="object-cover h-full -mt-10 w-[400px] md:mx-auto lg:mx-0 rounded-2xl"
              src={Bipin}
              alt=""
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  Bipinsinh
                </h2>
                <p className="mb-4 text-accent">Web Developer</p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8">
                  I have a solid understanding of front-end technologies such as
                  HTML, CSS, and JavaScript, allowing me to create visually
                  appealing and responsive web applications. <br />
                  Additionally, my
                  expertise in React and Tailwind CSS enables me to build modern
                  and user-friendly interfaces.
                </p>
              </div>
              <Link
                to="contact"
                smooth={true}
                className="btn btn-md bg-accent cursor-pointer hover:bg-accent-hover transition-all"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
