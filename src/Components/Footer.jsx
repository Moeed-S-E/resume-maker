import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 min-h-20 max-h-24 items-center justify-center shadow shadow-black">
      <div className="icons flex gap-4">
        <a
          href="https://www.github.com/Moeed-S-E"
          target="_blank"
          className="hover:text-indigo-600 transition-transform hover:scale-110 hover:-rotate-45 "
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-moeed-37b345253/"
          target="_blank"
          className="hover:text-indigo-600 transition-transform hover:scale-110 hover:rotate-45 "
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.discord.com/users/1089445852982030427/"
          target="_blank"
          className="hover:text-indigo-600 transition-transform hover:scale-110 hover:-rotate-45 "
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
      <strong>Made with ❤️ by Moeed</strong>
    </footer>
  );
}
