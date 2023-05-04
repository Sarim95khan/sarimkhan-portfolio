"use client";
import React from "react";
import BackgrounCircle from "@/components/BackgrounCircle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name's Sarim Khan", "Artist", "Developer", "Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8  ">
      {/* <Typewriter
        words={[
          "Welcome",
          "To Sarim Khan Website",
          "I am an Engineer",
          "and",
          "an aspiring artist",
        ]}
        cursor 
      /> */}
      <BackgrounCircle />
      <Image
        src="/images/Sarim.jpeg"
        width={128}
        height={128}
        alt="Sarim Khan"
        className="rounded-full object-cover  relative mt-4"
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase tracking-[15px] pb-2">
          Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
