"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3' style={{boxShadow:''}}>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
          
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>

        <div className='flex gap-3 md:gap-5'>
          <Link href='/' className=''>
            Home
          </Link>
          <Link href='/About' className=''>
            About
          </Link>
          <Link href='/Contact' className=''>
            Contact
          </Link>
          <Link href='/create-prompt' className=''>
            Create Post
          </Link>

          <button type='button' onClick={signOut} className='_btn flex-end' height='1px'>
            Sign Out
          </button>

          {/* <Link href='/profile'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
            />
          </Link> */}
        </div>

      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>

        <div className='flex'>
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className='dropdown'>
              <Link
                href='/profile'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href='/create-prompt'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type='button'
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className='mt-5 w-full black_btn'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>


      </div>
    </nav>
  );
};

export default Nav;
