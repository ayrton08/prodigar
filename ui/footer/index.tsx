import Link from "next/link";
import { Facebook, Instagram, Logo } from "../icons";
import { Body, BodyBold, Large, Subtitle, Small } from "../typography";

export const Footer = () => {
  return (
    <footer className="p-12 grid gap-12 md:flex md:justify-between md:p-16 bg-custom-blue">
      <div className="flex items-center gap-3">
        <Logo size={"w-14 h-14"} />
        <Subtitle color={"text-ligth-blue"}>Prodigar</Subtitle>
      </div>
      <div className="footer-content grid gap-6 ">
        <Large color={"text-gray-400"}>Redes</Large>
        <div className="content-links grid gap-4 mb-10 hover:text-blue-400">
          <Link
            href={""}
            className={
              "flex gap-2 items-center hover:underline hover:text-yellow-400 text-gray-300 font-montserrat text-base font-bold"
            }
          >
            <Instagram size={"w-7 h-7"} hover="hover:stroke-yellow-400" color="stroke-gray-300"/>
            Instagram
          </Link>
          <Link
            href={""}
            className={
              "flex gap-2 items-center hover:underline hover:text-yellow-400 text-gray-300 font-montserrat text-base font-bold"
            }
          >
            <Facebook size={"w-7 h-7"} hover="hover:stroke-yellow-400" color="stroke-gray-300"/>
            Facebook
          </Link>
        </div>
        <Small color={"text-white"}>© 2023 Prodigar</Small>
      </div>
    </footer>
  );
};
