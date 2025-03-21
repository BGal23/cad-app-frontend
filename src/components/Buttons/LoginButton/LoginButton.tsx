import { MdAccountCircle } from "react-icons/md";
import { LoginAvatar } from "./styles";
import {} from "./types";

const LoginButton = () => {
  return (
    <>
      <LoginAvatar to="/login">
        <MdAccountCircle size={"1.4em"} />
      </LoginAvatar>
    </>
  );
};

export default LoginButton;
