import { Container, Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainNav from "../components/NavBar";
import MainFooter from "../components/Footer";
import Router from "../routes";

const Layout = ({ children }, props) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        // backgroundImage: `url(assets/landingPageBg.png)`,
        // backgroundRepeat: "no-repeat",
        maxHeight: "4521px",
        padding: "0",
      }}
    >
      <img
        src="assets/landingPageBg.png"
        style={{ position: "absolute", width: "100%", zIndex: "1" }}
      />
      <Box sx={{ position: "relative", zIndex: "99" }}>
        <MainNav />

        {children}

        <MainFooter />
      </Box>
    </Container>
  );
};

export default Layout;
