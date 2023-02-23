import BasicNav from "../components/BasicNavBar";
import { Container, Stack, Typography } from "@mui/material";
import UserForm from "../components/UserForm";
import ApplyForm from "../components/ApplyForm";

const ApplyPage = () => {
  return (
    <Container
      width="1920px"
      sx={{
        minHeight: "1080px",
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
          minWidth={"272px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          ỨNG TUYỂN
        </Typography>
        <Stack
          height="40px"
          sx={{
            marginLeft: "58px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Stack pb="200px">
        {" "}
        <ApplyForm />
      </Stack>
    </Container>
  );
};

export default ApplyPage;
