import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <>
      <div className="fixed inset-x-4 my-6 mx-20 rounded-2xl  backdrop-blur-lg">
        <nav className="p-4 bg-gray-400/20 border-2 border-gray-800 flex items-center justify-between rounded-2xl">
          <h1 className="title text-2xl">Pokémon</h1>
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link href="/pages/About">About</Link>
            </li>
            <li>
              <Link href="/pages/Contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
