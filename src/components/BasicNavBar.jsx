import { Stack, Typography } from "@mui/material";

const BasicNav = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          paddingX: "100px",
          justifyContent: "space-between",
          minHeight: "120px",
          alignItems: "center",
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
      </Stack>
    </>
  );
};

export default BasicNav;
