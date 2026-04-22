import Landing from "../subPages/Landing";
import About from "../subPages/About";
import Project from "../subPages/Project";
import Blog from "../subPages/Blog";
import Contact from "../subPages/Contact";

const Home = () => {


  return (
    <>
      <Landing id="home" />
      <About id="about" />
      <Blog id="blog" />
      <Project id="project" />
      <Contact id="contact" />
    </>
  );
};

export default Home;
