// pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/sidebar";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 1,
      content: "1/5. Thank You for taking the time to check out my website! Scroll down for some more of me!",
    },
    {
      id: 2,
      content:
        " 2/5. My name is Ricardo! I also go by Rico, I have been a professional programmer for 1 year, I was born and raised around L.A.",
    },
    {
      id: 3,
      content:
        "3/5.  Like many others I got a passion for code, but also anything electronic! I take apart whatever I can get my hands on, even if i might end up breaking it. ",
    },
    { id: 4, content: "4/5.  For more details on my current long standing project, check out project 3. " },

    {
      id: 5,
      content:
        "5/5. Here is my Contact info, I appreciate you taking the time to look through my website!   Phone: 818-935-9670  | Email: RicardoATrevino2307@gmail.com ",
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
  }, []);

  return (
    <div>
      <Sidebar />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className={`min-h-screen flex items-center justify-center ${
            currentSection === index ? "bg-blue-500 text-white" : "bg-black-100"
          }`}
        >
          <h1 className="text-3xl">{section.content}</h1>
        </section>
      ))}
    </div>
  );
};

export default Home;
