import React from "react";
import profilePic from "../assets/2x2.jpg";
import reactIcon from "../assets/react.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ConstructionIcon from "@mui/icons-material/Construction";

const Profile = () => {
  return (
    <>
      <div className="bg-background">
        <div className="flex flex-row">
          <h5 className="text-subtext nav-header">components &gt;</h5>
          <img
            src={reactIcon}
            className="mt-1 h-3 w-3 lg:mt-3 lg:h-6 lg:w-6"
          ></img>
          <h5 className="text-subtext nav-header !px-1">
            Profile.jsx &gt; Profile
          </h5>
        </div>
      </div>
      <section
        id="profile"
        className="ml-10 flex flex-col items-center text-center"
      >
        <img
          src={profilePic}
          alt="Mikko Romasanta"
          className="mt-10 h-32 w-32 rounded-full lg:mt-20 lg:h-48 lg:w-48"
        ></img>
        <h1 className="text-primary font-bold">Mikko Romasanta</h1>
        <div className="text-secondary text-h5 lg:text-h4">
          Full Stack Engineer <span className="invisible lg:visible">|</span>{" "}
          <span className="text-accent">Django, React.js</span>
        </div>
      </section>
      <section
        id="links"
        className="mt-2 ml-10 flex flex-row items-center justify-center gap-6 lg:mt-6"
      >
        <a
          href="https://www.linkedin.com/in/mikkoRomasanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="text-selected !h-8 !w-8" />
        </a>
        <a
          href="https://github.com/mikkoRomasanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="text-selected !h-8 !w-8" />
        </a>
      </section>
      <section id="about-me" className="mt-6 ml-10 flex flex-col items-center">
        <p>
          As a Full Stack Engineer with over{" "}
          <span className="text-selected">five years of experience</span>, I
          specialize in API development, deployment, and maintenance using
          Django, as well as React.js development. I am dedicated to creating
          efficient and scalable solutions to meet organizational needs.
        </p>
        <p>
          In my previous roles, I helped{" "}
          <span className="text-selected">
            maintain and improve AWS infrastructure{" "}
          </span>
          to keep systems running smoothly. I enjoy using technology to solve
          real problems and collaborating with development teams to create
          meaningful results.
        </p>
      </section>
      <div className="mt-20 ml-10 flex flex-row justify-center">
        <ConstructionIcon className="text-accent !h-12 !w-12" />
        <div className="text-h5 lg:text-h3 px-6">work still in progress...</div>
      </div>
    </>
  );
};

export default Profile;
