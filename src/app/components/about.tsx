"use client";

import Image from "next/image";

export default function About() {
  return (
    <section >
      <div className="container">
        <div className="about-section">
          <h1 style={{marginBottom:"25px", fontSize:"2.5rem",color:"#374151" }}>About ME</h1>
          <p className="para">
          


          Welcome!,My name is Uzma Ahmed, Iam a passionate web developer and designer specializing in creating interactive, responsive, and visually engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in Next.js and Tailwind CSS, I focus on crafting projects that blend functionality with a clean, modern design aesthetic.

          My journey in web development is driven by a commitment to continuous learning and skill refinement. Currently, I am expanding my knowledge in Next.js, React, and TypeScript to build more dynamic and efficient applications. Each project I take on is an opportunity not only to challenge myself but also to produce high-quality, impactful work that resonates with users.

          Thank you for exploring my portfolio. I am excited to share my work with you, and I look forward to contributing to meaningful projects that push my creative and technical boundaries even further.

          </p>
        </div>

        <div className="img-section">
          <Image
          id="about-img"
            width={300}
            height={300}
            alt={"about-logo"}
            src={require("../../../public/picture/dp1.jpeg")}
          ></Image>
        </div>
      </div>
    </section>
  );
}
