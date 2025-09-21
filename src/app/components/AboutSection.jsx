"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
        <li>SQL</li>
        <li>Python</li>
        <li>Excel</li>
        <li>Power BI</li>
        <li>Tableau</li>
        <li>Figma</li>
        <li>Looker Studio</li>
        <li>PowerShell</li>
        <li>Power Automate</li>
        <li>Google Cloud</li>
        <li>Azure Devops</li>
        <li>Git</li>
        <li>R</li>
        <li>HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Michigan, Ann Arbor</li>
        <li>Bachelor of Science in Information, May 2025</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Business Intelligence</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi! I am Annabel, a recent graduate from the University of Michigan School of Information specializing in Data Analysis with minors in Business and Economics. I am a quick learner and I am always
            looking to expand my knowledge and skill set. Bridging people, business, and technology is what I'm aiming for. I hope to create solutions that make it easier for people to access information, automate business processes, transform data and visualize it to form actionable insights assisting business decisions.
<br></br><br></br>
            In my free time, I enjoy dancing, fencing, playing tennis, and exploring new places. I also love hanging out with friends and family.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Image src="/images/my-pic.JPEG" width={500} height={500} className="rounded-lg mt-16" />
      </div>
    </section>
  );
};

export default AboutSection;
