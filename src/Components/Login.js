import { PrimaryButton } from "./StyledComponents";
import { FaUserAlt } from "react-icons/fa";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h1>Log In</h1>
          <input type='email' placeholder="Username or Email" />
          <input type='password' placeholder="Password" />
          <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
        </div>
      </div>
    </div>
  );
}