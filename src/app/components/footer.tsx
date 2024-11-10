"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
        <div className="foot">
          <ul>
            <li className="animate">
              <Link
                    target="_blank"
                href={
                  "https://www.linkedin.com/in/uzma-ahmed-3557402ba/"
                }
              >
                <FaLinkedin />
              </Link>
            </li>

            <li className="animate"> 
              <Link
                
                target="_blank"
                href={
                  "https://github.com/uzmahmed26"
                }
              >
                <FaGithub />
              </Link>
            </li>

            <li className="animate">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/uzmahmed"
                }
              >
                <FaSquareFacebook />
              </Link>
            </li>

            <li className="animate">
              <Link       
                target="_blank"
                href={
                  "mailto: uzmahmed26.uk@gmail.com"
                }
              >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>

        <p id="copyright">
          Copyright &copy; 2024 Designed by UzmaAhmed (GIAIC-2024) All right Reserved
        </p>
      </footer>
    </div>
  );
}
