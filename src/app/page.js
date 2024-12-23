"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.to(textRef.current, {
      duration: 1,
      opacity: 1,
      scale: 1.1,
      ease: "bounce",
    });
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-[20rem] font-extrabold opacity-0" ref={textRef}>
        Home
      </div>
    </div>
  );
}
