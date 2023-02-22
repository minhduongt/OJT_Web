import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainNav from "../components/NavBar";
import MainFooter from "../components/Footer";
import Router from "../routes";

const Layout = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(assets/landingPageBg.png)`,
        minHeight: "4661px",
        padding: "0",
      }}
    >
      <MainNav />

      {children}

      <MainFooter />
    </Container>
  );
};

export default Layout;
