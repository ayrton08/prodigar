import React, { useState } from 'react';
import { BurguerButton } from 'ui/buttons';
import { Large, Subtitle } from '../typography';
import { Logo } from '../icons';
import Link from 'next/link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header bg-custom-blue p-10 fixed z-20">
      <Link
        className="logo flex items-center gap-3 md:hover:bg-blue-900 hover:rounded-lg hover:p-[1px] z-20"
        href={'/'}
      >
        <Logo size={'w-14 h-14'} />
        <Subtitle color={'text-ligth-blue'}>Prodigar</Subtitle>
      </Link>

      <nav className={`links ${menuOpen ? 'active' : ''}`}>
        <Large>
          <Link href="/objects-near-me" onClick={handleClick}>
            Objetos cerca mío
          </Link>
        </Large>
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
          <Link href="/login" onClick={handleClick}>
            Login
          </Link>
        </Large>
        <Large>
          <Link href="/signup" onClick={handleClick}>
            SignUp
          </Link>
        </Large>
      </nav>

      <div className="burguer">
        <BurguerButton open={menuOpen} handleClick={handleClick} />
      </div>

      <div className={`bgDiv initial ${menuOpen ? 'active' : ''}`}></div>
    </header>
  );
};

export default Header;
