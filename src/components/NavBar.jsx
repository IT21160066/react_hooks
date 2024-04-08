import Navlinks from "./Navlinks";
import "../index.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Navlinks linkname="Home" url="#home" />
      <Navlinks linkname="About" url="#about" />
      <Navlinks linkname="Contact" url="#contact" />
    </div>
  );
};

export default NavBar;
