import {
  LoginBox,
  PrimaryButton,
  LoginContainer,
  LoginInput,
} from "./StyledComponents";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Login() {
  return (
    <LoginContainer>
      <LoginBox>
        <Typography
          sx={{ color: "grey", margin: "25px 0" }}
          variant="h4"
          gutterBottom
        >
          Log In
        </Typography>

        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="email"
            placeholder="Email or Username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <LoginInput id="password" placeholder="Password" />
          <PrimaryButton variant="contained">Continue with Email</PrimaryButton>
        </FormControl>
      </LoginBox>
    </LoginContainer>
  );
}
