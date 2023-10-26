import { Link, NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <ul className="flex justify-between items-center px-8 py-1 mb-12 h-full text-sm bg-white rounded-xl gap-1">
      <li>
          <NavLink
            to="/events"
            className="flex items-center justify-center px-8 h-10 leading-tight text-white bg-[#915EFF] border rounded-lg border-gray-100 hover:bg-purple-800 hover:text-white"
          >
            1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events-2"
            className="flex items-center justify-center px-8 h-10 leading-tight text-white bg-[#915EFF] border rounded-lg border-gray-100 hover:bg-purple-800 hover:text-white"
          >
            2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events-3"
            className="flex items-center justify-center px-8 h-10 leading-tight text-white bg-[#915EFF] border rounded-lg border-gray-100 hover:bg-purple-800 hover:text-white"
          >
            3
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events-4"
            className="flex items-center justify-center px-8 h-10 leading-tight text-white bg-[#915EFF] border rounded-lg border-gray-100 hover:bg-purple-800 hover:text-white"
          >
            4
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
