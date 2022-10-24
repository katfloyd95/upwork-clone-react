import { PrimaryButton } from "./StyledComponents";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h1>Log In</h1>
          <input type='email'/>
          <input type='password' />
          <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
        </div>
      </div>
    </div>
  );
}