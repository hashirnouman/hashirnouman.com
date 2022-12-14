import Head from "next/head";
import React from "react";
type Props = {};
const About = (props: Props) => {
  return (
    <div className="bg-custom-light  overflow-hidden w-screen h-screen">
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-52 ml-12 flex-col space-y-6">
        <h1 className="text-7xl font-bold text-custom ">About me</h1>
        <h1 className="text-7xl font-bold text-custom-lightest "></h1>

        <p className="text-3xl text-custom-lightest font-normal w-3/5">
          I am a Full Stack Web developer with expertise in JavaScript
          technologies like React,Next.js and Typescript. I love to do research
          about new technologies to improve my knowledge. In future, I foresee
          myself as a blockchain developer.
        </p>
      </div>
    </div>
  );
};

export default About;
