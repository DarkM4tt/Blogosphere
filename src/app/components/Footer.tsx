import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="text-center p-4">
    <div className="flex justify-center gap-8 mb-4">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
    </div>
    <p className="text-xs">Copyright ©2020 All rights reserved</p>
  </footer>
);

export default Footer;
