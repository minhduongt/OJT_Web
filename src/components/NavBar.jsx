import { Box, Container, Link, Stack, Typography } from "@mui/material";

const MainNav = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        paddingX: "100px",
        justifyContent: "space-between",
        minHeight: "120px",
        alignItems: "center",
        border: "solid",
        borderColor: "#000000",
        borderWidth: "1px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Stack
        sx={{
          width: "178px",
          fontFamily: "SVN-Gilroy",
          alignItems: "center",
        }}
        direction={"row"}
      >
        <img
          src={"/assets/Logo.png"}
          alt={"Logo"}
          loading="lazy"
          width={"70px"}
          height="70px"
        />
        <Typography
          fontWeight={"400"}
          fontSize="32px"
          lineHeight={"40px"}
          color="#FF4601"
          sx={{ paddingLeft: "20px" }}
        >
          OJT
        </Typography>
      </Stack>
      <Stack direction="row">
        <Stack
          sx={{
            width: "447px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          direction={"row"}
        >
          <Link href="#" underline="hover">
            <Typography
              fontFamily="SVN-Gilroy"
              fontWeight={"400"}
              fontSize="24px"
              lineHeight={"25px"}
              color="#363534"
            >
              Giới thiệu
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography
              fontFamily="SVN-Gilroy"
              fontWeight={"400"}
              fontSize="24px"
              lineHeight={"25px"}
              color="#363534"
            >
              Việc làm
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography
              fontFamily="SVN-Gilroy"
              fontWeight={"400"}
              fontSize="24px"
              lineHeight={"25px"}
              color="#363534"
            >
              Quản lý OJT
            </Typography>
          </Link>
        </Stack>
        <Stack
          spacing={1.5}
          direction={"row"}
          sx={{
            paddingLeft: "50px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "114px",
            minHeight: "60px",
          }}
        >
          <img
            src={"/assets/ringbellfixed.png"}
            alt={"Logo"}
            loading="lazy"
            width={"44px"}
            height="44px"
          />
          <img
            src={"/assets/currentUser.png"}
            alt={"Logo"}
            loading="lazy"
            width={"60px"}
            height="60px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainNav;
