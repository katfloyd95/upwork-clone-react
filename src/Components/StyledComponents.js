import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  textTransform: "none",
  borderRadius: "20px",
}));

export const LoginBox = styled(Box)(() => ({
  backgroundColor: "white",
  width: "500px",
  height: "400px",
  padding: "40px",
  boxSizing: "border-box",
}));

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#F0F1F4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px ${PRIMARY_GREEN} solid`,
  borderRadius: "5px",
  margin: "5px 0",
  padding: "2px 5px",
}));
