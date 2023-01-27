import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryMenu from "./CategoryMenu";

export default function JobBoard() {
  return (
    <>
      <TopNav />
      <Box
        sx={{
          padding: "70px 10%",
          background: "green",
          height: "500px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            background: "orange",
            width: "30%",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              marginBottom: "40px",
            }}
          >
            Find Work
          </Typography>
          <Typography variant="h6" gutterBottom>
            Categories
          </Typography>
          <CategoryMenu />
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
