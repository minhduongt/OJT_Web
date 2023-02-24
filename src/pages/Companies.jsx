import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  InputBase,
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

const CompanyList1 = [
  {
    name: "schaeffler",
    picurl: "/assets/schaeffler.png",
  },
  {
    name: "unicloud",
    picurl: "/assets/unicloud.png",
  },
  {
    name: "netcompany",
    picurl: "/assets/netcompany.png",
  },
  {
    name: "manulife",
    picurl: "/assets/manulife.png",
  },
];

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

  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
];

const CompaniesPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          minWidth={"271px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          CÔNG TY
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
        {/* <InputLabel fontFamily="Kanit">Tìm kiếm công ty...</InputLabel> */}
        <InputBase
          startAdornment={
            <Box paddingLeft={"30px"} paddingRight={"10px"} pt="3px">
              <img
                src="/assets/search.png"
                loading="lazy"
                width={"25px"}
                height={"25px"}
              />
            </Box>
          }
          placeholder="Tìm kiếm công ty..."
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
                Bộ lọc
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
                Tìm kiếm
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
        spacing={8}
        columns={4}
        paddingY="80px"
      >
        <Grid item xs={4}>
          <Container>
            <Box
              pt={4}
              sx={{
                flexGrow: 1,
              }}
            >
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item>
                  <Box
                    sx={{
                      backgroundColor: "#E5EBF2",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                    width={"290px"}
                    height={"393px"}
                    boxShadow="0px 0px 20px 1px rgba(2, 44, 89, 0.2)"
                  >
                    <Stack justifyContent="center" alignItems="center">
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"290px"}
                        height={"139px"}
                        backgroundColor="white"
                      >
                        <img
                          src="/assets/schaeffler.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"86px"}
                        height={"26px"}
                        backgroundColor="#E5EBF2"
                        pt={"10px"}
                      >
                        <img
                          src="/assets/START.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Typography
                        fontFamily={"Dela Gothic One"}
                        color={"#022C59"}
                        fontSize="24px"
                        fontWeight={400}
                        textAlign="center"
                        pt="10px"
                        lineHeight="130%"
                      >
                        Công Ty TNHH <br />
                        Scchaefler <br /> Việt Nam
                      </Typography>
                      <Typography
                        fontFamily={"SVN-Gilroy"}
                        fontWeight="400"
                        fontSize={"18px"}
                        paddingBottom="10px"
                        paddingTop={"6px"}
                        lineHeight="150%"
                      >
                        Long Thành, Biên Hoà
                      </Typography>

                      <Typography
                        border={"2px solid #FF4601 "}
                        borderRadius="40px"
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        color="#FF4601"
                        paddingX={"25px"}
                        paddingY={"10px"}
                        lineHeight="19px"
                      >
                        Xem các vị trí ứng tuyển
                      </Typography>
                      <Typography
                        pt="6px"
                        color={"#979797"}
                        fontSize="14px"
                        fontWeight={300}
                        fontFamily={"SVN-Gilroy"}
                      >
                        Xem chi tiết
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Box
              pt={4}
              sx={{
                flexGrow: 1,
              }}
            >
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item>
                  <Box
                    sx={{
                      backgroundColor: "#E5EBF2",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                    width={"290px"}
                    height={"393px"}
                    boxShadow="0px 0px 20px 1px rgba(2, 44, 89, 0.2)"
                  >
                    <Stack justifyContent="center" alignItems="center">
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"290px"}
                        height={"139px"}
                        backgroundColor="white"
                      >
                        <img
                          src="/assets/unicloud.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"86px"}
                        height={"26px"}
                        backgroundColor="#E5EBF2"
                        pt={"10px"}
                      >
                        <img
                          src="/assets/START.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Typography
                        fontFamily={"Dela Gothic One"}
                        color={"#022C59"}
                        fontSize="24px"
                        fontWeight={400}
                        textAlign="center"
                        pt="10px"
                        lineHeight="130%"
                      >
                        Công Ty cổ phần <br />
                        Tập đoàn Công <br /> nghệ UNICLOUD
                      </Typography>
                      <Typography
                        fontFamily={"SVN-Gilroy"}
                        fontWeight="400"
                        fontSize={"18px"}
                        paddingBottom="10px"
                        paddingTop={"6px"}
                        lineHeight="150%"
                      >
                        Khu công nghệ cao, TP. Thủ Đức
                      </Typography>

                      <Typography
                        border={"2px solid #FF4601 "}
                        borderRadius="40px"
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        color="#FF4601"
                        paddingX={"25px"}
                        paddingY={"10px"}
                        lineHeight="19px"
                      >
                        Xem các vị trí ứng tuyển
                      </Typography>
                      <Typography
                        pt="6px"
                        color={"#979797"}
                        fontSize="14px"
                        fontWeight={300}
                        fontFamily={"SVN-Gilroy"}
                      >
                        Xem chi tiết
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Box
              pt={4}
              sx={{
                flexGrow: 1,
              }}
            >
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item>
                  <Box
                    sx={{
                      backgroundColor: "#E5EBF2",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                    width={"290px"}
                    height={"393px"}
                    boxShadow="0px 0px 20px 1px rgba(2, 44, 89, 0.2)"
                  >
                    <Stack justifyContent="center" alignItems="center">
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"290px"}
                        height={"139px"}
                        backgroundColor="white"
                      >
                        <img
                          src="/assets/netcompany.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"86px"}
                        height={"26px"}
                        backgroundColor="#E5EBF2"
                        pt={"10px"}
                      >
                        <img
                          src="/assets/START.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Typography
                        fontFamily={"Dela Gothic One"}
                        color={"#022C59"}
                        fontSize="24px"
                        fontWeight={400}
                        textAlign="center"
                        pt="40px"
                        lineHeight="130%"
                      >
                        SparX - A Vituoral
                      </Typography>
                      <Typography
                        fontFamily={"SVN-Gilroy"}
                        fontWeight="400"
                        fontSize={"18px"}
                        paddingTop={"6px"}
                        lineHeight="150%"
                        paddingBottom={"40px"}
                      >
                        Tân Bình, thành phố Hồ Chí Minh
                      </Typography>

                      <Typography
                        border={"2px solid #FF4601 "}
                        borderRadius="40px"
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        color="#FF4601"
                        paddingX={"25px"}
                        paddingY={"10px"}
                        lineHeight="19px"
                      >
                        Xem các vị trí ứng tuyển
                      </Typography>
                      <Typography
                        pt="6px"
                        color={"#979797"}
                        fontSize="14px"
                        fontWeight={300}
                        fontFamily={"SVN-Gilroy"}
                      >
                        Xem chi tiết
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Box
              pt={4}
              sx={{
                flexGrow: 1,
              }}
            >
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item>
                  <Box
                    sx={{
                      backgroundColor: "#E5EBF2",
                      borderRadius: "10px 10px 10px 10px",
                    }}
                    width={"290px"}
                    height={"393px"}
                    boxShadow="0px 0px 20px 1px rgba(2, 44, 89, 0.2)"
                  >
                    <Stack justifyContent="center" alignItems="center">
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"290px"}
                        height={"139px"}
                        backgroundColor="white"
                      >
                        <img
                          src="/assets/manulife.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Box
                        borderRadius={"10px 10px 0px 0px"}
                        width={"86px"}
                        height={"26px"}
                        backgroundColor="#E5EBF2"
                        pt={"10px"}
                      >
                        <img
                          src="/assets/START.png"
                          loading="lazy"
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                      <Typography
                        fontFamily={"Dela Gothic One"}
                        color={"#022C59"}
                        fontSize="24px"
                        fontWeight={400}
                        textAlign="center"
                        pt="40px"
                        lineHeight="130%"
                      >
                        FPT Software
                      </Typography>
                      <Typography
                        fontFamily={"SVN-Gilroy"}
                        fontWeight="400"
                        fontSize={"18px"}
                        paddingBottom="40px"
                        paddingTop={"6px"}
                        lineHeight="150%"
                      >
                        Tân Bình, thành phố Hồ Chí Minh
                      </Typography>

                      <Typography
                        border={"2px solid #FF4601 "}
                        borderRadius="40px"
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "SVN-Gilroy",
                        }}
                        color="#FF4601"
                        paddingX={"25px"}
                        paddingY={"10px"}
                        lineHeight="19px"
                      >
                        Xem các vị trí ứng tuyển
                      </Typography>
                      <Typography
                        pt="6px"
                        color={"#979797"}
                        fontSize="14px"
                        fontWeight={300}
                        fontFamily={"SVN-Gilroy"}
                      >
                        Xem chi tiết
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        spacing={8}
        columns={4}
        paddingBottom="200px"
      >
        {CompanyList2.map((com) => {
          return (
            <Grid item xs={4}>
              <Container>
                <Box
                  pt={4}
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Grid
                    justifyContent="center"
                    alignItems="center"
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item>
                      <Box
                        sx={{
                          backgroundColor: "#E5EBF2",
                          borderRadius: "10px 10px 10px 10px",
                        }}
                        width={"290px"}
                        height={"393px"}
                        boxShadow="0px 0px 20px 1px rgba(2, 44, 89, 0.2)"
                      >
                        <Stack justifyContent="center" alignItems="center">
                          <Box
                            borderRadius={"10px 10px 0px 0px"}
                            width={"290px"}
                            height={"139px"}
                            backgroundColor="white"
                          >
                            <img
                              src="/assets/fpts.png"
                              loading="lazy"
                              width={"100%"}
                              height={"100%"}
                            />
                          </Box>
                          <Box
                            borderRadius={"10px 10px 0px 0px"}
                            width={"86px"}
                            height={"26px"}
                            backgroundColor="#E5EBF2"
                            pt={"10px"}
                          >
                            <img
                              src="/assets/START.png"
                              loading="lazy"
                              width={"100%"}
                              height={"100%"}
                            />
                          </Box>
                          <Typography
                            fontFamily={"Dela Gothic One"}
                            color={"#022C59"}
                            fontSize="24px"
                            fontWeight={400}
                            textAlign="center"
                            pt="40px"
                            lineHeight="130%"
                          >
                            FPT Software
                          </Typography>
                          <Typography
                            fontFamily={"SVN-Gilroy"}
                            fontWeight="400"
                            fontSize={"18px"}
                            paddingBottom="40px"
                            paddingTop={"6px"}
                            lineHeight="150%"
                          >
                            Tân Bình, thành phố Hồ Chí Minh
                          </Typography>

                          <Typography
                            border={"2px solid #FF4601 "}
                            borderRadius="40px"
                            sx={{
                              fontWeight: 400,
                              fontSize: "18px",
                              fontFamily: "SVN-Gilroy",
                            }}
                            color="#FF4601"
                            paddingX={"25px"}
                            paddingY={"10px"}
                            lineHeight="19px"
                          >
                            Xem các vị trí ứng tuyển
                          </Typography>
                          <Typography
                            pt="6px"
                            color={"#979797"}
                            fontSize="14px"
                            fontWeight={300}
                            fontFamily={"SVN-Gilroy"}
                          >
                            Xem chi tiết
                          </Typography>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CompaniesPage;
