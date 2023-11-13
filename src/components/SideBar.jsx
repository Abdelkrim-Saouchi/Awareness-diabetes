import { Link } from "react-router-dom";

import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useRef, useState } from "react";

const SideBar = () => {
  const sideBarRef = useRef(null);
  const leftRef = useRef(null);
  const [isLeft, setIsLeft] = useState(true);

  const toggleSideBar = () => {
    sideBarRef.current.classList.toggle("translate-x-full");
    setIsLeft((prev) => !prev);
  };
  return (
    <>
      <div
        ref={sideBarRef}
        className="fixed z-20 flex min-h-screen w-max translate-x-full flex-col items-center border-l border-l-gray-200 bg-white px-4 py-2 text-xl shadow-lg md:relative md:translate-x-0 md:text-2xl md:font-semibold"
      >
        <ul className="flex flex-col gap-5 p-2 md:mt-4 md:gap-8">
          <li
            onClick={toggleSideBar}
            className=" flex w-max cursor-pointer rounded border-2 font-bold shadow-lg hover:opacity-75"
          >
            <Link to="intro" className=" grow p-2 md:p-3">
              مقدمة حول السكري
            </Link>
          </li>
          <li
            onClick={toggleSideBar}
            className=" flex w-max cursor-pointer rounded border-2 font-bold shadow-lg hover:opacity-75"
          >
            <Link to="complications" className=" grow p-2 md:p-3">
              مضاعفات السكري
            </Link>
          </li>
          <li
            onClick={toggleSideBar}
            className=" flex w-max cursor-pointer rounded border-2 font-bold shadow-lg hover:opacity-75"
          >
            <Link to="prevention" className=" grow p-2 md:p-3">
              إجراءات الوقاية
            </Link>
          </li>
        </ul>

        {isLeft ? (
          <button
            onClick={toggleSideBar}
            ref={leftRef}
            className="absolute -left-11 top-1/3 animate-pulse md:hidden"
          >
            <Icon path={mdiMenuLeft} size={2.5} />
          </button>
        ) : (
          <button
            onClick={toggleSideBar}
            className="absolute -left-11 top-1/3 animate-pulse md:hidden"
          >
            <Icon path={mdiMenuRight} size={2.5} />
          </button>
        )}
      </div>
    </>
  );
};

export default SideBar;
