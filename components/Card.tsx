import React from "react";
import styles from "./styles/Card.module.css";
type Props = { children: React.ReactNode; text: string };

const Card = ({ children, text }: Props) => {
  return (
    <div className=" space-y-3 ">
      <div className="flex items-center justify-center">{children}</div>
      <div>
        <h1 className="font-bold text-custom text-3xl text-center">{text}</h1>
      </div>
    </div>
  );
};

export default Card;
