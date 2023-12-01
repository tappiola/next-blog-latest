'use client';
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header: React.FC = () => {
    const pathname = usePathname();
  const isActive: (linkPathname: string) => boolean = (linkPathname) =>
    pathname === linkPathname;

  let left = (
    <div className="left">
      <Link href="/" className="bold" data-active={isActive("/")}>
          Feed
      </Link>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
