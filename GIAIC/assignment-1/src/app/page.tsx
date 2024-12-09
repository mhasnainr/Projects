"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="intro">
        <Image
          src={"/intro.png"}
          alt={"cover-image"}
          className="max-w-full max-h-full object-contain"
          width={1920} // Set a maximum width for larger screens
          height={1080}
          priority
        />
      </div>
      <div className="trending"></div>
    </div>
  );
}
