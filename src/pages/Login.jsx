import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      w="1920px"
      sx={{
        minHeight: "1080px",
        backgroundImage: `url(assets/loginBg.png)`,
        p: 0,
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems="center"
        width={"100%"}
        height="1080px"
      >
        <Stack>
          <Stack direction={"row"} alignItems="center" gap={2} pb="50px">
            <img width={"70px"} height="70px" src={"assets/Logo.png"} />
            <Typography fontSize="32px" lineHeight={"46px"} color="#FF4601">
              OJT
            </Typography>
          </Stack>
          <Stack color="#022C59" gap={2}>
            <Typography fontSize="64px" lineHeight={"93px"} pb={"20px"}>
              Đăng nhập
            </Typography>
            <Stack gap={1}>
              <Typography fontSize={"18px"} lineHeight="26px">
                Tên đăng nhập
              </Typography>
              <InputBase
                sx={{
                  width: "480px",
                  height: "50px",
                  borderRadius: "40px",
                  backgroundColor: "#E5EBF2",
                  fontFamily: "SVN-Gilroy",
                  px: "30px",
                }}
                placeholder="SE111111"
              />
            </Stack>
            <Stack gap={1} pb="30px">
              <Typography fontSize={"18px"} lineHeight="26px">
                Mật khẩu
              </Typography>
              <InputBase
                sx={{
                  width: "480px",
                  height: "50px",
                  borderRadius: "40px",
                  backgroundColor: "#E5EBF2",
                  fontFamily: "SVN-Gilroy",
                  px: "30px",
                }}
                placeholder="Mật khẩu của bạn"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <img w="25px" h="15px" src="assets/godeyehide.png" />
                      ) : (
                        <img w="25px" h="15px" src="assets/godeyeopen.png" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Stack>

            <Button
              onClick={() => {
                navigate("/profile");
                props.firstLoaded();
              }}
              variant="contained"
              sx={{
                height: "80px",
                width: "480px",
                backgroundColor: "#FF4601",
                color: "#FFFFF",
                borderRadius: "40px",
                ":hover": {
                  backgroundColor: "#FF4601",
                  opacity: 0.8,
                },
              }}
            >
              <Typography>Đăng nhập</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default LoginPage;
