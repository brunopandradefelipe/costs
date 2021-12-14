import { Link } from "react-router-dom";
import logo from "../image/costs_logo.png";
import Container from "./Container";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo site" />
        </Link>
        <ul className={style.list}>
          <li  className={style.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={style.item}>
            <Link to="/company">Sobre</Link>
          </li>
          <li className={style.item}>
            <Link to="/project">Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
