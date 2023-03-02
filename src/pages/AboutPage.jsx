import { Container, Stack, Typography } from "@mui/material";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <Container
      w="1920px"
      sx={{
        minHeight: "1080px",
        // backgroundImage: `url(assets/profileBg.png)`,
        p: 0,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          paddingTop: "120px",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "100px",
        }}
      >
        <Typography
          minWidth={"390px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="52px"
          lineHeight={"52px"}
        >
          TỔNG QUAN OJT
        </Typography>
        <Stack
          height="52px"
          sx={{
            marginLeft: "10px",
            width: "1320px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Stack pb="250px">
        <AboutSection />
      </Stack>
    </Container>
  );
};

export default AboutPage;
