import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-slate-800 shadow-md rounded-full px-4 py-2">
        <div className="flex items-center space-x-2">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className="text-white hover:text-black hover:bg-yellow-400  px-3 py-1 rounded-full text-sm transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
