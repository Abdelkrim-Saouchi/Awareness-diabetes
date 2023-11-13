import { Link } from "react-router-dom";

import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useRef } from "react";

const SideBar = () => {
  const sideBarRef = useRef(null);
  const leftRef = useRef(null);

  const toggleSideBar = () => {
    sideBarRef.current.classList.toggle("translate-x-full");
  };
  return (
    <>
      <div
        ref={sideBarRef}
        className="fixed z-10 flex min-h-screen w-max translate-x-full flex-col items-center border-l border-l-gray-200 bg-white px-4 py-2 text-xl shadow-lg md:relative md:translate-x-0 md:text-2xl md:font-semibold"
      >
        <ul className="flex flex-col gap-5 p-2 md:mt-4 md:gap-8">
          <li className="flex cursor-pointer rounded border-2 shadow-lg hover:opacity-75 md:p-3">
            <Link to="intro" className="w-max p-2 md:p-3">
              مقدمة
            </Link>
          </li>
          <li className="flex cursor-pointer rounded border-2 shadow-lg hover:opacity-75 md:p-3">
            <Link to="complications" className="w-max p-2 md:p-3">
              مضاعفات السكري
            </Link>
          </li>
          <li className="flex cursor-pointer rounded border-2 shadow-lg hover:opacity-75 md:p-3">
            <Link className="w-max p-2 md:p-3">الوقاية</Link>
          </li>
          <li className="flex cursor-pointer rounded border-2 shadow-lg hover:opacity-75 md:p-3">
            <Link className="w-max p-2 md:p-3">دعم مرضى السكري</Link>
          </li>
        </ul>
        <button
          onClick={toggleSideBar}
          className="mt-4 animate-bounce md:hidden"
        >
          <Icon path={mdiMenuRight} size={2.5} />
        </button>
        <button
          onClick={toggleSideBar}
          ref={leftRef}
          className="absolute -left-11 top-1/3 animate-pulse md:hidden"
        >
          <Icon path={mdiMenuLeft} size={2.5} />
        </button>
      </div>
    </>
  );
};

export default SideBar;
