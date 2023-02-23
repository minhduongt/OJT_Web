import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// components

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Container>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldnt find the page you are looking for. Perhaps you have
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        {/* <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} /> */}

        <Button to="/" size="large" variant="contained" component={RouterLink}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
