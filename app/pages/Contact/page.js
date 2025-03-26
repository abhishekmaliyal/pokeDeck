import Topbar from "@/components/Topbar";
import GlassIcons from "@/components/ui/GlassIcons";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

const items = [
  {
    icon: <MdOutlineAlternateEmail />,
    color: "red",
    label: "Email",
    link: "mailto:abhishekmaliyal123@gmail.com",
  },
  {
    icon: <FiGlobe />,
    color: "green",
    label: "Portfolio",
    link: "https://abhishekmaliyal.netlify.app",
  },
  {
    icon: <GrLinkedin />,
    color: "blue",
    label: "Portfolio",
    link: "https://www.linkedin.com/in/abhishek-maliyal-a3113b217/",
  },
];

export default function page() {
  return (
    <>
      <Topbar />
      <div className="container flex w-screen h-screen pt-28 mx-40 flex-col">
        <h1 className="me text-8xl">Contact me. </h1>
        <div className="icons flex w-full h-full">
          <div
            style={{ height: "600px", position: "relative" }}
            className="flex items-center justify-center w-full h-1/2"
          >
            <GlassIcons items={items} className="custom-class" />
          </div>
        </div>
      </div>
    </>
  );
}
