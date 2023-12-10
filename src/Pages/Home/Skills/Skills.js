import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

const SkillCard = ({ data }) => {
  return <>
    <div
      class="flex justify-between mt-4"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <span class="text-base font-medium text-teal-400 dark:text-white">
        {data.name}
      </span>
      <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
        {data.pers}%
      </span>
    </div>
    <div
      class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div
        class="bg-teal-400 h-3.5 rounded-full"
        style={{ width: `${data.pers}%` }}
      ></div>
    </div>
  </>
}

const Skills = () => {
  const webDev = [
    {
      name: "Html",
      pers: 80
    },
    {
      name: "CSS",
      pers: 70
    },
    {
      name: "Bootstrap",
      pers: 60
    },
    {
      name: "Tailwind",
      pers: 50
    },
    {
      name: "Javascript",
      pers: 70
    },
    {
      name: "React",
      pers: 60
    },
    {
      name: "Next Js",
      pers: 50
    },
    {
      name: "Express Js",
      pers: 50
    },
    {
      name: "Node",
      pers: 50
    },
    {
      name: "MongoDB",
      pers: 50
    },
    {
      name: "Redux",
      pers: 40
    },
    {
      name: "Typescript",
      pers: 40
    },
    {
      name: "Postgress SQL",
      pers: 30
    },
    {
      name: "Prisma",
      pers: 30
    },
    {
      name: "Docker",
      pers: 20
    },
  ]
  const soft = [
    {
      name: "Python",
      pers: 60
    },
    {
      name: "Django",
      pers: 50
    },
    {
      name: "C",
      pers: 50
    },
    {
      name: "C++",
      pers: 50
    },
    {
      name: "My SQL",
      pers: 30
    },
    {
      name: "Java",
      pers: 30
    },
    {
      name: "AWS",
      pers: 10
    },
    {
      name: "Data Structure",
      pers: 10
    },
    {
      name: "Algorithm",
      pers: 10
    },
  ]
  const gameD = [
    {
      name: "Blender",
      pers: 40
    },
    {
      name: "Unreal Engine",
      pers: 60
    },
  ]
  return (
    <div id="skills">
      <h1 className="text-xl font-bold text-center title">Skills</h1>
      <h2 className="text-4xl font-bold text-center text-white">
        I Work Hard to Improve My Skills
        <br /> Regularly
      </h2>
      <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 mx-auto px-40">
        {/* Web Development Skills  */}
        <div
          class="rounded-lg dark:border-gray-700"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-center text-teal-400 text-2xl">Web Development</h1>
          {
            webDev.map(k => <SkillCard data={k} key={k.name} />)
          }
        </div>
        <div
          class="rounded-lg dark:border-gray-700"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-center text-teal-400 text-2xl">Software Engineer</h1>
          {
            soft.map(k => <SkillCard data={k} key={k.name} />)
          }
           <h1 className="text-center text-teal-400 text-2xl mt-5">Game Development</h1>
          {
            gameD.map(k => <SkillCard data={k} key={k.name} />)
          }
        </div>
      </section>
    </div>
  );
};

export default Skills;
