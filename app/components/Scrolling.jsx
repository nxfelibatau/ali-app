import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Scrolling() {
  return (
    <>
      <div class="scrolling-logo-outer-wrapper mb-2">
        <div class="scrolling-logo-container">
          <div class="scrolling-logo-wrapper">
            <Link href="https://github.com/sawdi777" className="bx bxl-github text-silk text-2xl"></Link>
          </div>
          <div class="scrolling-logo-wrapper">
            <Link href="https://www.kaggle.com/sawdi777" className="text-silk text-2xl"><Image src="/images/kaggle.png" width={100} height={100}></Image></Link>
          </div>
        </div>
      </div>
    </>
  );
}
