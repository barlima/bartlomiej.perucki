import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 justify-center items-center w-full">
      <a
        href="https://www.instagram.com/bartlomiejperucki/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-3 rounded-full transition-opacity bg-green hover:opacity-70"
      >
        <div className="text-white">
          <FaInstagram size={32} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/bart%C5%82omiej-perucki-319a0bb5/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-3 rounded-full transition-opacity bg-green hover:opacity-70"
      >
        <div className="text-white transition-opacity hover:opacity-70">
          <FaLinkedin size={32} />
        </div>
      </a>
      <a
        href="mailto:bartekperucki@gmail.com"
        aria-label="Email"
        className="p-3 rounded-full transition-opacity bg-green hover:opacity-70"
      >
        <div className="text-white">
          <FaRegEnvelope size={32} />
        </div>
      </a>
    </div>
  );
}
