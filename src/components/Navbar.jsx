import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-sidebar h-full">
      <div className="bg-background">
        <h4 className="nav-header"> &#9660; PORTFOLIO</h4>
      </div>
      <div className="py-5 pl-8">
        <h5 className="subnav !text-subtext">&#9660; node_modules</h5>
        <h5 className="subnav">&#9660; public</h5>
        <h5 className="subnav">&#9660; src</h5>
        <h5 className="subnav text-selected">&#9660; components</h5>
        <div className="pl-10 bg-highlight">
          <div className="flex flex-row text-selected">
            <h5 className="w-full">Profile.jsx</h5>
            <h5 className="m-auto pr-8">M</h5>
          </div>
        </div>
        <h5 className="subnav"># App.jsx</h5>
        <h5 className="subnav"># App.css</h5>
        <h5 className="subnav "># index.css</h5>
        <h5 className="subnav disabled"># Main.jsx</h5>
      </div>
    </nav>
  );
};

export default Navbar;
