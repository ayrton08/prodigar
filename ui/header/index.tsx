import React, { useState } from "react";
import { BurguerButton } from "ui/buttons";
import { Large, Subtitle } from "../typography";
import { Logo } from "../icons";
import Link from "next/link";
import { useGetToken, useMe } from "hooks";
// import { useAppSelector } from "hooks/redux-toolkit";
// import { RootState } from "store";
import { removeToken } from "@/lib/api";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const { token } = useGetToken();
  const userData: any = useMe();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const sessionClick = () => {
    setMenuOpen(!menuOpen);
    if (token) {
      removeToken();
      router.push("/");
    }
  };

  return (
    <header className="header bg-custom-blue p-10 fixed z-20">
      <Link
        className="logo flex items-center gap-3 md:hover:bg-blue-900 hover:rounded-lg hover:p-[1px] z-20"
        href={"/"}
      >
        <Logo size={"w-14 h-14"} />
        <Subtitle color={"text-ligth-blue"}>Prodigar</Subtitle>
      </Link>

      <nav className={`links ${menuOpen ? "active" : ""}`}>
        <Large>
          <Link href="/objects-near-me" onClick={handleClick}>
            Objetos cerca mío
          </Link>
        </Large>
        {token ? (
          <>
            <Large>
              <Link href="/profile" onClick={handleClick}>
                Perfil
              </Link>
            </Large>
            <Large>
              <Link href="/my-post" onClick={handleClick}>
                Mis objetos publicados
              </Link>
            </Large>
            <Large>
              <Link href="/item/post" onClick={handleClick}>
                Publicar objetos
              </Link>
            </Large>
            <Large>
              <span className="text-white">{userData?.email}</span>
            </Large>
            <Large>
              <button
                className="bg-red-600 p-2 text-white rounded-lg "
                onClick={sessionClick}
              >
                Logout
              </button>
            </Large>
          </>
        ) : (
          <>
            <Large>
              <Link href="/login">Login</Link>
            </Large>
            <Large>
              <Link href="/signup" onClick={handleClick}>
                <button className="bg-yellow-400 p-2 text-black rounded-lg ">
                  SignUp
                </button>
              </Link>
            </Large>
          </>
        )}
      </nav>

      <div className="burguer">
        <BurguerButton open={menuOpen} handleClick={handleClick} />
      </div>

      <div className={`bgDiv initial ${menuOpen ? "active" : ""}`}></div>
    </header>
  );
};

export default Header;
