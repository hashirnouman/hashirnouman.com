import Link from "next/link";
import React from "react";
type Props = {
  text: string;
  path: string;
};

const NavLink = ({ text, path }: Props) => {
  return (
    <>
      <Link href={path}>
        <div className="py-8 cursor-pointer ">
          <h6 className="text-3xl font-bold text-center text-custom-lightest cursor-pointer ">
            {text}
          </h6>
        </div>
      </Link>
    </>
  );
};

export default NavLink;
