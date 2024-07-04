// pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/sidebar";

const Page = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 1,
      content: "1/4.<br><br> ",
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
      content: "",
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
    <div className="bg-custom-gradient2 min-h-screen">
      <Sidebar />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className={`min-h-screen flex items-center justify-center ${
            currentSection === index ? "bg-black-100" : "bg-black-100"
          }`}
        >
          <h1 className="text-3xl" dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
    </div>
  );
};

export default Page;
