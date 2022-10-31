import { LoginBox, PrimaryButton } from "./StyledComponents";
import { FaUserAlt } from "react-icons/fa";
import Box from '@mui/material/Box';

export default function Login() {
  return (
    <Box sx={{
      width: '100%', 
      height: '100vh', 
      backgroundColor: '#F0F1F4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoginBox>
        <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
      </LoginBox>
    </Box>
    // <div className="login-container">
    //   <div className="login-box">
    //     <div className="login-content">
    //       <h1>Log In</h1>
    //       <input type='email' placeholder="Username or Email" />
    //       <input type='password' placeholder="Password" />
    //       <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
    //     </div>
    //   </div>
    // </div>
  );
}