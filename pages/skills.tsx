import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import {
  SiPostman,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { IconContext } from "react-icons";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="bg-custom-light  overflow-hidden w-screen h-screen">
      <Head>
        <title>Skills</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-52 ml-12">
        <h1 className="text-7xl font-bold text-custom ">Skills</h1>
        <div className="flex pt-10">
          <IconContext.Provider
            value={{
              size: "80",
              color: "white",
            }}
          >
            <div className="grid grid-cols-5 gap-8">
              <Card text="React.js">
                <SiReact />
              </Card>
              <Card text="Typescript">
                <SiTypescript />
              </Card>
              <Card text="Next.js">
                <SiNextdotjs />
              </Card>
              <Card text="Tailwindcss">
                <SiTailwindcss />
              </Card>
              <Card text="Nest.js">
                <SiNestjs />
              </Card>
              <Card text="Graphql">
                <SiGraphql />
              </Card>
              <Card text="Postman">
                <SiPostman />
              </Card>
              <Card text="MongDb">
                <SiMongodb />
              </Card>
              <Card text="Postgresql">
                <SiPostgresql />
              </Card>
              <Card text="Mysql">
                <SiMysql />
              </Card>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Skills;
