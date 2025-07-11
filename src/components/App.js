import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

const projectData = [
  {
    id: 1,
    name: "Shee Parlour Website",
    about: "A nature-inspired beauty salon website",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    name: "Blog Manager",
    about: "A CRUD app for managing blog posts",
    technologies: ["React", "JSON Server", "Bootstrap"]
  },
  {
    id: 3,
    name: "Library System",
    about: "A single-page app to manage books and users",
    technologies: ["JavaScript", "HTML", "JSON"]
  }
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
}

export default App;
