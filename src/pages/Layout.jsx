import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainNav from "../components/NavBar";
import MainFooter from "../components/Footer";
import Router from "../routes";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage: `url(../src/assets/landingPageBg.png)`,
            minHeight: "4661px",
            padding: "0",
          }}
        >
          <MainNav />
          <Router />
        </Container>
        <MainFooter />
      </BrowserRouter>
    </>
  );
};

export default Layout;
