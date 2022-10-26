import { PrimaryButton } from "./StyledComponents";
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
      <Box sx={{
        backgroundColor:'white',
        width: '500px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '40px',
        boxSizing: 'border-box'
      }}>
        <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
      </Box>
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