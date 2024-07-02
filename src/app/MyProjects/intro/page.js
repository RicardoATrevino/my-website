// pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/sidebar";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 1,
      content:
        "1/4.<br><br> My name is Ricardo! I also go by Rico, I have been a professional full-stack dev for 1 year (Ruby, JS,Typescript to name a few), I was born and raised around L.A.",
    },
    {
      id: 2,
      content:
        " 2/4.<br><br> Growing up I never enjoyed anything even remotely close to programming but it eventually took hold of me back in 2019 when I took my first Comp Sci class, with C++ being the first language I learned .",
    },
    {
      id: 3,
      content:
        "3/4.<br><br>  Like many others in this field, I got a passion for code, but also anything electronic! I take apart whatever I can get my hands on, even if i might end up breaking it. example: Project 3 ",
    },

    {
      id: 4,
      content:
        "4/4.<br><br> Here is my Contact info, I appreciate you taking the time to look through my website!  <br> Phone: 818-935-9670   <br>Email: RicardoATrevino2307@gmail.com ",
    },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const newSection = sections.findIndex(
      (section, index) => scrollPosition >= document.getElementById(`section-${index + 1}`).offsetTop
    );
    setCurrentSection(newSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <Sidebar />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className={`min-h-screen flex items-center justify-center  ${
            currentSection === index ? "bg-blue-500 text-white" : "bg-blue-500"
          }`}
        >
          <h1 className="text-3xl" dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
    </div>
  );
};

export default Home;
