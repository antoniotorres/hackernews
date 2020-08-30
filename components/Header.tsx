import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="text-center py-5">
        <nav>
          <h1 className="text-4xl no-underline leading-6 font-medium text-orange-500 focus:outline-none focus:text-orange-900 transition ease-in-out duration-150">
            Hacker News
          </h1>
        </nav>
      </div>
    </header>
  );
}
