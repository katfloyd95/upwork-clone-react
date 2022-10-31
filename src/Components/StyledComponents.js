import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  textTransform: 'none',
  borderRadius: '20px'
}));

export const LoginBox = styled(Box)(() => ({
  backgroundColor:'white',
  width: '500px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: '40px',
  boxSizing: 'border-box'
}));