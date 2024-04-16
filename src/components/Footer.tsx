import Image from "next/image";
import logo from "@/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image src={logo} alt="logo" className="w-24 mt-4" />
      <p className="text-sm">
        All rights reserved{" "}
        <a
          href="https:reactbd.com"
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          target="_blank"
        >
          @reactbd.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
