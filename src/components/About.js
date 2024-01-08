import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <>
      <h1>About us</h1>
      <p>This is Namaste React! Class for Router Demo</p>
      <ProfileClass name={"Hari"} />
      <Outlet />
    </>
  );
};
export default About;
