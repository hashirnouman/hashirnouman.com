import React from "react";
import Navlink from "./NavLink";
import { GitHub, Linkedin, Twitter } from "react-feather";
import logo from "../../images/logo.png";
import Image from "next/image";
import { MenuItems } from "../../json/MenuItems";
import Link from "next/link";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-custom-dark min-h-screen ">
      <Link href="/" className="cursor-pointer">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="flex-col w-52 ">
        {MenuItems.map((d) => {
          return <Navlink key={d.id} text={d.item} path={d.path} />;
        })}
        <div className="flex  justify-evenly mr-3 mt-7">
          <a
            href="https://www.linkedin.com/in/hashir-nouman/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin color="white" />
          </a>
          <a
            href="https://twitter.com/hashirnouman"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter color="white" />
          </a>
          <a
            href="https://github.com/hashirnouman"
            rel="noreferrer"
            target="_blanks"
          >
            <GitHub color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
