"use client";

import { useState, useEffect, Fragment, useRef } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const timeoutDuration = 400;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathName = usePathname();

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/projects", current: false },
    { name: "Contact", href: "/contact", current: false },
  ]);

  useEffect(() => {
    const newNavigation = navigation.map((link) => {
      return {
        name: link.name,
        href: link.href,
        current: link.href === pathName,
      };
    });
    setNavigation(newNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <header>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <span className="flex items-center w-auto text-white text-lg font-medium">
                    DARIO RUSSO
                  </span>

                  <div className="hidden sm:ml-6 sm:block">
                    <ul className="flex space-x-4">
                      {navigation.map((item) => (
                        <li key={item.name} className="flex">
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-primary-500/70"
                                : "hover:bg-primary-500",
                              "px-5 py-4 rounded-md text-md text-white font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden">
                <ul className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-primary-500/70"
                            : "hover:bg-primary-500",
                          "block rounded-md px-4 py-2 text-lg font-medium text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
}
