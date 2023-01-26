import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function JobBoard() {
  return (
    <>
      <TopNav />
      <Box
        sx={{
          padding: "10%",
          background: "green",
          height: "500px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            background: "orange",
            width: "30%",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ textAlign: "left" }}>
            Find Work
          </Typography>
        </Box>
        <Box
          sx={{
            background: "blue",
            width: "70%",
          }}
        ></Box>
      </Box>
    </>
  );
}
