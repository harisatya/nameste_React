import logo from "../assets/img/cheflogo.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img src={logo} alt="image" width="100px" />
  </Link>
);

export default Title;
