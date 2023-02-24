import { Container } from "@mui/material";
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
        style={{ position: "absolute", width: "100%" }}
      />
      <MainNav />

      {children}

      <MainFooter />
    </Container>
  );
};

export default Layout;
