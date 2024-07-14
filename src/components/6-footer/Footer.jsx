//
//

import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="main-container flex flex-col md:flex-row justify-center md:justify-between items-center py-8">
        <ul className="flex items-center gap-4">
          <li>
            <a className="text-lg" href="#hero">
              About
            </a>
          </li>
          <li>
            <a className="text-lg" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-lg" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-sm text-center">&copy; 2024 - All Rights Reserved</p>
      </footer>
    </>
  );
}
