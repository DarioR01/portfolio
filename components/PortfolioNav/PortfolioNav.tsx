"use client";

import { useState, useEffect, Fragment, useRef } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const timeoutDuration = 400;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const pathName = usePathname();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeOutRef: { current: NodeJS.Timeout | undefined } = useRef(undefined);

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    {
      name: "About",
      href: "/about",
      current: false,
      subMenu: [
        { name: "Education", href: "/about" },
        { name: "Experience", href: "/about" },
        { name: "Hobbies", href: "/about" },
      ],
    },
    { name: "Projects", href: "/projects", current: false },
    { name: "Contact", href: "/contact", current: false },
  ]);

  useEffect(() => {
    const newNavigation = navigation.map((link) => {
      return link?.subMenu
        ? {
            name: link.name,
            href: link.href,
            current: link.href === pathName,
            subMenu: link.subMenu,
          }
        : {
            name: link.name,
            href: link.href,
            current: link.href === pathName,
          };
    });
    setNavigation(newNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <span className="flex items-end block h-8 w-auto text-white text-lg font-medium">
                  DARIO RUSSO
                </span>

                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      <li key={item.name} className="flex">
                        {item?.subMenu ? (
                          <Popover
                            as="div"
                            className="relative inline-block text-left"
                          >
                            {({ open }) => (
                              <div
                                onMouseEnter={() => handleEnter(open)}
                                onMouseLeave={() => handleLeave(open)}
                              >
                                <Popover.Button
                                  ref={triggerRef}
                                  className={classNames(
                                    item.current
                                      ? "bg-primary-500/70 text-white"
                                      : "text-white hover:bg-primary-500 hover:text-white",
                                    "inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                                  )}
                                >
                                  {item.name}
                                  <ChevronDownIcon
                                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as="div"
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                  className="before:content-[''] before:block before:h-5 before:w-full absolute right-0 z-10"
                                >
                                  <Popover.Panel className="w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <ul className="px-1 py-1 ">
                                      {item.subMenu.map((subItem) => (
                                        <li key={subItem.name}>
                                          <a
                                            href={subItem.href}
                                            className="group inline-flex w-full rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-primary-500"
                                          >
                                            {subItem.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </Popover.Panel>
                                </Transition>
                              </div>
                            )}
                          </Popover>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-primary-500/70 text-white"
                                : "text-white hover:bg-primary-500",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        )}
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
                    {item?.subMenu ? (
                      <Popover key={item.name} as={Fragment}>
                        <Popover.Button
                          className={classNames(
                            item.current
                              ? "bg-primary-500/70 text-white"
                              : "text-gray-300 hover:bg-primary-500 hover:text-white",
                            "flex rounded-md px-4 py-2 text-sm font-medium text-white w-full text-left"
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Popover.Panel>
                            <ul>
                              {item.subMenu.map((subItem) => (
                                <li key={subItem.name}>
                                  <a
                                    href={subItem.href}
                                    className={classNames(
                                      item.current
                                        ? "bg-primary-500/70 text-white"
                                        : "text-gray-300 hover:bg-primary-500 hover:text-white",
                                      "block rounded-md px-8 py-2 text-sm font-medium text-white"
                                    )}
                                  >
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    ) : (
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-primary-500/70 text-white"
                            : "text-gray-300 hover:bg-primary-500 hover:text-white",
                          "block rounded-md px-4 py-2 text-sm font-medium text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )}
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
