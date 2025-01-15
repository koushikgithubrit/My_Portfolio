"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C, C++</li>
        <li>Java</li>
        <li>Linux</li>
        <li>HTML</li>
        <li>CSS, Tailwind CSS</li>
        <li>JS, React JS, Next JS, Node JS, Express JS</li>
        <li>Flutter</li>
        <li>AI/ML</li>
        <li>SQL, MongoDB</li>
        <li>Internet of Things (IoT)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Higher Secondary (WBCHSE)</li>
        <li>BE CSE (Chitkara University, Himachal Pradesh)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://www.linkedin.com/posts/koushik-adak-187669248_ai-innovation-hackathonvictory-activity-7180976265170939904-7t4U?utm_source=share&utm_medium=member_android">The Hackathon: The Combating hate speech online with AI</a></li>
        <li><a href="https://www.linkedin.com/in/koushik-adak-187669248/overlay/1736617634867/single-media-viewer/?profileId=ACoAAD1Sa7cBP7_GUvA6r_zVgltMkKoRBlS5Z6M">Google Cloud Study Jam</a></li>
        <li><a href="https://www.linkedin.com/in/koushik-adak-187669248/overlay/1736617842836/single-media-viewer/?profileId=ACoAAD1Sa7cBP7_GUvA6r_zVgltMkKoRBlS5Z6M">MERN Stack</a></li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-purple-300">
          Hi, I’m Koushik Adak, an innovative tech enthusiast and problem-solver passionate about creating impactful solutions through IoT, AI, and software development. I’m always looking to push the boundaries of innovation while collaborating with forward-thinking teams to shape the future of technology. Let’s connect and make something extraordinary together!          </p>
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
      </div>
    </section>
  );
};

export default AboutSection;
