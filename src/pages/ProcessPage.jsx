import { Container, Stack, Typography } from "@mui/material";
import ProcessSection from "@/components/ProcessSection";

const ProcessPage = () => {
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
        >
          QUY TRÌNH OJT
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
      <Stack>
        <ProcessSection />
      </Stack>
    </Container>
  );
};

export default ProcessPage;
