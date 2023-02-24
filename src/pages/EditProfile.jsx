import BasicNav from "../components/BasicNavBar";
import { Container, Stack, Typography } from "@mui/material";
import UserForm from "../components/UserForm";
import EditForm from "../components/EditForm";

const EditProfile = () => {
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
          CHỈNH SỬA THÔNG TIN
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
      <Stack pb="140px">
        <EditForm />
      </Stack>
    </Container>
  );
};

export default EditProfile;
