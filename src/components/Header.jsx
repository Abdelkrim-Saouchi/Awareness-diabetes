import { mdiDiabetes } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-b-gray-200 bg-white px-4 py-2 text-xl font-semibold shadow-lg">
      <Link to="/" className="flex items-center gap-2">
        <Icon path={mdiDiabetes} size={1.5} />
        <h1 className="hidden text-2xl font-semibold md:block">
          توعية ضد السكري
        </h1>
      </Link>
      <ul className="flex justify-between gap-6">
        <li className="flex hover:opacity-75">
          <Link to="/">الواجهة</Link>
        </li>
        <li className="flex hover:opacity-75">
          <Link to="contact">تواصل معي</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
