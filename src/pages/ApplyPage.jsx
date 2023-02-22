import { Container } from "@mui/material";
import UserForm from "../components/UserForm";

const ApplyPage = () => {
  return (
    <Container maxWidth="1920px" sx={{ minHeight: "1330px" }}>
      {/* Section 1--------- */}

      <UserForm></UserForm>
    </Container>
  );
};

export default ApplyPage;
