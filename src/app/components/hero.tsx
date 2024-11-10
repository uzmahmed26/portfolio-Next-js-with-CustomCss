"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{minWidth:"100%"}}>
      <div className="hero">
        <div className="image-section">
          <Image
            className="img"
            src={require("../../../public/picture/dp1.jpeg")}
            alt={"pic"}
            width={400}
            height={400}
          ></Image>
        </div>

        <div className="content">
          <h1
            id="head"
            style={{
              fontWeight: "normal",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
          <span style={{ color: "#374151" }}>Hi I'm,</span> <span style={{ color: "#F2506D" }}>UzmaAhmed</span>
          </h1>
          <div
            style={{
              height: "2px",
              width: "40%",
              margin: "auto",
              marginBottom: "20px",
              background: "#F2506D",
            }}
          ></div>
          <p className="para">
          I have built this portfolio with Next.js and Tailwind CSS, and I am actively advancing my skills in both Next.js and React. My expertise lies in HTML, CSS, and JavaScript, with a growing command of TypeScript. Driven by a passion for continuous learning, I am drawn to projects that challenge me and foster growth in both technical and creative aspects. I aim to deliver high-quality work that reflects my dedication and adaptability in an ever-evolving field.

          </p>

          <button id="btn">Hire me</button>
        </div>
      </div>


      {/* 2nd */}


      <div id="project">
  <section className="project-container">
    <div className="project-header">
      <h1>My Projects</h1>
    </div>
    <div className="project-row">
      <div className="project-item">
        <Image
          src="/picture/Web-Design-.png"
          alt="Website Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Website Project</h2>
          <h1>Website</h1>
          <p>
            I specialize in creating visually engaging and user-friendly websites, blending creativity with functionality.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/atm-insert-card.jpg"
          alt="ATM Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>ATM Project</h2>
          <h1>ATM</h1>
          <p>
            The ATM project is designed to simulate basic banking functionalities, allowing users to perform transactions securely.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/cal.png"
          alt="Calculator Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Calculator Project</h2>
          <h1>Calculator</h1>
          <p>
            A simple yet powerful tool for basic arithmetic operations like addition, subtraction, multiplication, and division.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/quiz.png"
          alt="Quiz Game Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Quiz Game Project</h2>
          <h1>Quiz Game</h1>
          <p>
            An interactive game that tests users' knowledge across various topics with multiple-choice questions and real-time feedback.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/png-student managment.png"
          alt="Student Management Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Student Management Project</h2>
          <h1>Student Management</h1>
          <p>
            A system for managing student records, including personal details, academic performance, and attendance.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/to do.jpg"
          alt="To-Do List Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>To-Do List Project</h2>
          <h1>To-Do List</h1>
          <p>
            A simple task management app that helps users organize and keep track of their daily activities and tasks.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/gassing.jpg"
          alt="Gassing Game Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Gassing Game Project</h2>
          <h1>Gassing Game</h1>
          <p>
            An interactive game for players, focusing on engaging activities and increasing user participation.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
        
      </div>
      <div className="project-item">
        <Image
          src="/picture/oop.png"
          alt="Online Shop Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Online Shop Project</h2>
          <h1>Online Shop</h1>
          <p>
            An e-commerce platform for buying and selling products, including user registration, product management, and secure checkout.
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>
      <div className="project-item">
        <Image
          src="/picture/wc.png"
          alt="Online Shop Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2> Word Counter project</h2>
          <h1> The Word Counter </h1>
          <p>
          The Word Counter project is a practical tool designed to analyze and count the number of words, characters, and sentences in a given text. With a simple and intuitive interface, users can easily input or paste their text to receive detailed statistics. This application is useful for writers, editors, and students to monitor text length and ensure adherence to content requirements. The project showcases fundamental programming concepts such as text processing, user input handling, and real-time data analysis.?
          </p>
          <a href="https://github.com/uzmahmed26" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>
    </div>
    
  </section>
  
</div> 

      </section>
  );
}
