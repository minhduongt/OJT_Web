import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  InputBase,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { Image } from "@mui/icons-material";
import { color } from "@mui/system";
import { useNavigate } from "react-router-dom";
const CompanyList2 = [
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
];
const JobsPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {" "}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          minWidth={"271px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          C??NG VI???C
        </Typography>
        <Box
          height="40px"
          sx={{
            marginLeft: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Stack
        direction={"row"}
        sx={{ paddingTop: "80px", paddingBottom: "120px" }}
        justifyContent="center"
        alignItems="center"
      >
        <InputBase
          startAdornment={
            <Box paddingLeft={"40px"} paddingRight={"10px"} pt="3px">
              <img
                src="/assets/search.png"
                loading="lazy"
                width={"25px"}
                height={"25px"}
              />
            </Box>
          }
          placeholder="T??n c??ng vi???c b???n mu???n ???ng tuy???n..."
          sx={{
            fontWeight: "300",
            fontSize: "20px",
            fontFamily: "Kanit",
            backgroundColor: "white",
            width: "1060px",
            height: "80px",
            borderRadius: "40px",
            boxShadow: "0px 0px 20px 1px rgba(255, 70, 1, 0.3)",
          }}
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <Box
                height={"80px"}
                borderLeft={"2px solid rgba(103, 101, 101, 0.3)"}
                pr="10px"
              ></Box>
              <Typography
                fontWeight={"300"}
                fontSize={"20px"}
                fontFamily="Kanit"
              >
                B??? l???c
              </Typography>
              <Box paddingLeft={"14px"} paddingRight={"70px"} pt="3px">
                <img
                  src="/assets/FILTER.png"
                  loading="lazy"
                  width={"25px"}
                  height={"25px"}
                />
              </Box>
              <Box
                borderRadius={"40px"}
                paddingX={"50.5px"}
                paddingY={"27px"}
                textAlign={"center"}
                bgcolor={"#FF4601"}
                color="#F8FBFF"
                width={"220px"}
                sx={{
                  fontFamily: "Dela Gothic One",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                T??m ki???m
              </Box>
            </InputAdornment>
          }
          label="Password"
        />
      </Stack>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        spacing={"150px"}
        columns={3}
        paddingBottom="200px"
      >
        {CompanyList2.map((com) => {
          return (
            <Grid item xs={4}>
              <Container>
                <Box
                  pt={"29px"}
                  pl="20px"
                  sx={{
                    flexGrow: 1,
                    boxShadow: "0px 0px 20px 1px rgba(2, 44, 89, 0.2)",
                  }}
                  height={"381px"}
                  width={"400px"}
                  backgroundColor="#F8FBFF"
                  borderRadius={"10px"}
                >
                  <Stack
                    justifyContent={"flex-start"}
                    alignContent={"center"}
                    container
                    spacing={1}
                    width="157px"
                    height={"54px"}
                  >
                    <Typography
                      textAlign={"center"}
                      justifyContent={"center"}
                      alignContent={"center"}
                      sx={{
                        border: "1px solid #676565",
                        borderRadius: "40px",
                        // color: "#676565",
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "13px",
                        fontFamily: "SVN-Gilroy",
                      }}
                      height="24px"
                      paddingX={"10px"}
                      paddingY={"6px"}
                    >
                      C??ng ngh??? th??ng tin
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Typography
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                          border: "1px solid #676565",
                          borderRadius: "40px",
                          color: "#676565",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "13px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        height="24px"
                        paddingX={"10px"}
                        paddingY={"6px"}
                      >
                        5 tri???u
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                          border: "1px solid #676565",
                          borderRadius: "40px",
                          color: "#676565",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "13px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        height="24px"
                        paddingX={"10px"}
                        paddingY={"6px"}
                      >
                        Bi??n Ho??
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    justifyContent={"flex-start"}
                    alignContent={"center"}
                    direction="row"
                    spacing={0}
                    pt="30px"
                  >
                    <Stack
                      direction="column"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      {" "}
                      <Typography
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                          color: "#022C59",
                          fontSize: "24px",
                          fontWeight: "400",
                          lineHeight: "130%",
                          fontFamily: "Dela Gothic One",
                        }}
                        height="24px"
                        paddingX={"6px"}
                        paddingY={"6px"}
                      >
                        Software Developer
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                          color: "#022C59",
                          fontSize: "24px",
                          fontWeight: "400",
                          lineHeight: "130%",
                          fontFamily: "Dela Gothic One",
                        }}
                        height="24px"
                        paddingX={"6px"}
                      >
                        Intern
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                          color: "#022C59",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "130%",
                          fontFamily: "SVN-Gilroy",
                        }}
                        height="24px"
                        paddingX={"6px"}
                      >
                        t???i C??ng ty THHH Schaeffler Vi???t
                      </Typography>
                      <Divider
                        paddingX={"6px"}
                        sx={{
                          width: "290px",
                          border: "2px solid rgba(240, 110, 40, 0.3)",
                        }}
                      />
                      <Typography
                        paddingX={"6px"}
                        mt={"10px"}
                        sx={{
                          color: "#676565",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "130%",
                          fontFamily: "SVN-Gilroy",
                        }}
                      >
                        T??? 5.000.000 VN?? ( ???? g???m VAT)
                      </Typography>
                      <Typography
                        mt={"10px"}
                        paddingX={"6px"}
                        sx={{
                          color: "#676565",
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "130%",
                          fontFamily: "SVN-Gilroy",
                        }}
                      >
                        Bi??n Ho??, ?????ng Nai
                      </Typography>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Button
                          onClick={() => navigate("/apply")}
                          sx={{
                            width: "181px",
                            height: "40px",
                            border: "2px solid #FF4601",
                            color: "#FF4601",
                            borderRadius: "40px",
                            ":hover": {
                              color: "FF4601",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              minWidth: "151px",
                              color: "#FF4601",
                              fontSize: "18px",
                              fontWeight: "400",
                              lineHeight: "130%",
                              fontFamily: "SVN-Gilroy",
                            }}
                            // paddingY="10px"
                            // paddingX="25px"
                          >
                            ???ng tuy???n ngay
                          </Typography>
                        </Button>

                        <Typography
                          sx={{
                            color: "#676565",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "130%",
                            fontFamily: "SVN-Gilroy",
                          }}
                        >
                          Xem chi ti???t
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box width={"50px"} height={"50px"} backgroundColor="white">
                      <img
                        src="/assets/schaeffler.png"
                        loading="lazy"
                        width={"100%"}
                        height={"100%"}
                      />
                    </Box>
                  </Stack>
                </Box>
              </Container>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default JobsPage;
