import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (route) => {
    if (route === router.pathname) return true;
    return false;
  };

  const navigate = [
    { name: "Hash", route: "/hash" },
    { name: "Block", route: "/block" },
    { name: "Blockchain", route: "/" },
    { name: "Distributed", route: "/distributed" },
    { name: "Tokens", route: "/tokens" },
    { name: "Coinbase", route: "/coinbase" },
    { name: "Contracts", route: "/contracts" },

  ];
  const styles = {
    navItem: `text-gray-200 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium`,
    actv: "bg-gray-800 text-gray-100 ",
    mobileItem:
      "text-gray-300 hover:bg-gray-800 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium",
  };
  return (
    <nav className="bg-[#101010]    navbar-dark  max-w-screen w-11/12 rounded-xl  bg-opacity-60 backdrop-filter backdrop-blur-lg z-50 mt-2">
      <div className="max-w-screen px-4 py-2 sm:px-6 relative lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex w-full items-center justify-between">
            <div className=" md:basis-1/2 text-white text-xl font-bold font-robo">
              Blockchain Demo
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigate.map((e, i) => (
                  <Link href={e.route} key={i}>
                    <a
                      className={`${styles.navItem} ${
                        isActive(e.route) ? styles.actv : " "
                      }`}
                    >
                      {e.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"

            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
               <AiOutlineMenu className="h-6 w-6 block"/>
              ) : (
              <AiOutlineClose className="h-6 w-6 block"/>
               
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-100 -translate-y-10"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-100 translate-x-10"
      >
        {(ref) => (
          <div
            className="md:hidden  w-full opacity-90 rounded-lg absolute   bg-[#101010]  60 backdrop-filter backdrop-blur-lg"
            id="mobile-menu z-50 shadow"
          >
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigate.map((e, i) => (
                <Link href={e.route} key={i}>
                  <a
                    className={`${styles.mobileItem} ${
                      isActive(e.route) ? styles.actv : " "
                    }`}
                  >
                    {e.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
