import BasicNav from "../components/BasicNavBar";
import { Box, Container, Stack, Typography } from "@mui/material";
import UserForm from "../components/UserForm";

const ProfilePage = () => {
  return (
    <Container
      w="1920px"
      sx={{
        backgroundImage: `url(assets/profileBg.png)`,
        minHeight: "1080px",
        p: 0,
      }}
    >
      <BasicNav />

      <Stack
        direction={"row"}
        sx={{
          paddingTop: "120px",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "210px",
        }}
      >
        <Typography
          minWidth={"482px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          THÔNG TIN CÁ NHÂN
        </Typography>
        <Stack
          height="40px"
          sx={{
            marginLeft: "68px",
            width: "950px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <UserForm />
    </Container>
  );
};

export default ProfilePage;
