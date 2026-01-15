import React from "react";
import profilePic from "../assets/2x2.jpg";
import reactIcon from "../assets/react.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ConstructionIcon from "@mui/icons-material/Construction";

const Profile = () => {
  return (
    <>
      <div className="bg-background ">
        <div className="flex flex-row ">
          <h5 className="text-subtext nav-header">components &gt;</h5>
          <img src={reactIcon} className="h-6 w-6 mt-3"></img>
          <h5 className="text-subtext nav-header !px-1">
            Profile.jsx &gt; Profile
          </h5>
        </div>
      </div>
      <section id="profile" className="flex flex-col items-center ml-10">
        {/* <div className="flex flex-col items-center"> */}
        <img
          src={profilePic}
          alt="Mikko Romasanta"
          className="mt-20 h-48 w-48 rounded-full"
        ></img>
        <h1 className="text-primary font-bold">Mikko Romasanta</h1>
        <h4 className="text-secondary">
          Full Stack Engineer |{" "}
          <span className="text-accent">Django, React.js</span>
        </h4>
      </section>
      <section
        id="links"
        className="flex flex-row gap-6 items-center mt-6 ml-10 justify-center"
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
      <section id="about-me" className="flex flex-col items-center mt-6 ml-10">
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
      <div className="flex flex-row justify-center mt-20 ml-10">
        <ConstructionIcon className="text-accent !h-12 !w-12" />
        <h3 className="px-6">work still in progress...</h3>
      </div>
    </>
  );
};

export default Profile;
