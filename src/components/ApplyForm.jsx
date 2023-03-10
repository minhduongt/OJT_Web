// material
import { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: "220px",
    color: "grey",
    borderColor: "#FF4601",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#FF4601",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "#FF4601",
      },
    },
  },
}));

const SelectGender = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Stack>
        <Button
          sx={{
            width: "220px",
            height: "44px",
            backgroundColor: "#E5EBF2",
            borderRadius: "40px",
            ":hover": {
              backgroundColor: "#E5EBF2",

              opacity: 0.8,
            },
          }}
          id="gender-select"
          aria-controls={open ? "gender-select" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<img src="assets/dropdownArrow.png" />}
        >
          <Typography
            fontFamily={"SVN-Gilroy"}
            sx={{
              pl: "15px",
              width: "219.95px",
              textAlign: "left",
              textTransform: "capitalize",
              color: "black",
            }}
          >
            Nam
          </Typography>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            Nam
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            N???
          </MenuItem>
        </StyledMenu>
        <Typography
          color={"#FF4601"}
          fontFamily={"SVN-Gilroy"}
          fontWeight="300"
        >
          *B???t bu???c
        </Typography>
      </Stack>
    </>
  );
};

function ApplyForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [saved, SetSaved] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const navigate = useNavigate();

  const saveProfile = () => {
    SetSaved(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleImageUpload = async (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log("file: ", file);
      setCurrentImage(file);
      if (file.size > 1000000) {
        toast({
          title: "Vui l??ng ch???n t???p c?? k??ch th?????c nh??? h??n",
          status: "error",
          position: "top-right",
          isClosable: true,
          duration: 1000,
        });
        return;
      }

      const reader = new FileReader();
      const { current } = uploadedImage;
      if (current) {
        current.file = file;
        reader.onload = (e) => {
          console.log("image", e);

          current.src = e.target.result;
          setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const listInputs = [
    {
      title: "H??? v?? t??n",
      placeholder: "H??? v?? t??n c???a b???n",
      optional: "B???t bu???c",
      type: "text",
      value: "Tr???n Nguy???n V??n An",
    },
    {
      title: "Gi???i t??nh",
      placeholder: "Ch???n",
      optional: "B???t bu???c",
      value: "Nam",
    },
    {
      title: "MSSV",
      placeholder: "M?? s??? sinh vi??n c???a b???n",
      optional: "B???t bu???c",
      type: "text",
      value: "SE151222",
    },
    {
      title: "Ng??nh h???c",
      placeholder: "Kh???i ng??nh_Ng??nh",
      optional: "B???t bu???c",
      type: "text",
      value: "C??ng ngh??? th??ng tin_K??? thu???t ph???n m???m",
    },
    {
      title: "Ng??y sinh",
      placeholder: "Ng??y/th??ng/n??m",
      optional: "B???t bu???c",
      type: "date",
      value: "01/01/2001",
    },
    {
      title: "?????a ch???",
      placeholder: "?????a ch??? hi???n t???i c???a b???n",
      optional: "B???t bu???c",
      type: "address",
      value:
        "30, L?? Xu??n Oai, ph?????ng Long Tr?????ng, th??nh ph??? Th??? ?????c, th??nh ph??? H??? Ch?? Minh",
    },
    {
      title: "??i???n tho???i li??n l???c",
      placeholder: "S??? ??i???n tho???i c???a b???n",
      optional: "B???t bu???c",
      type: "text",
      value: "0988 124 341",
    },
    {
      title: "Email",
      placeholder: "sample@fpt.edu.vn",
      optional: "B???t bu???c",
      type: "email",
      value: "AnTNVSE151222@fpt.edu.vn",
    },
  ];

  return (
    <>
      <Stack
        direction={"row"}
        pt="50px"
        px="210px"
        justifyContent={"center"}
        width="100%"
      >
        <Stack gap={3} width="950px">
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"flex-start"}
            gap={5}
            paddingX="110px"
            pt="16px"
          >
            <Typography color="#022C59" minWidth={"180px"} fontSize="18px">
              Email
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <Typography
                fontFamily={"SVN-Gilroy"}
                fontSize="18px"
                fontWeight={"300"}
              >
                AnTNVSE151222@fpt.edu.vn
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"flex-start"}
            gap={5}
            paddingX="110px"
            pt="16px"
          >
            <Typography color="#022C59" minWidth={"180px"} fontSize="18px">
              Ng?????i nh???n
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <Typography
                fontFamily={"SVN-Gilroy"}
                fontSize="18px"
                fontWeight={"300"}
              >
                svcinfo@schaeffler.com
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"flex-start"}
            gap={5}
            paddingX="110px"
            pt="16px"
          >
            <Typography color="#022C59" minWidth={"180px"} fontSize="18px">
              Ti??u ?????
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <Typography
                fontFamily={"SVN-Gilroy"}
                fontSize="18px"
                fontWeight={"300"}
              >
                Tr???n Nguy???n V??n An_Software Developer Intern
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"flex-start"}
            gap={5}
            paddingX="110px"
            pt="16px"
            pb="10px"
          >
            <Typography color="#022C59" minWidth={"180px"} fontSize="18px">
              N???i dung
            </Typography>
            <Stack direction={"row"}>
              <InputBase
                multiline
                maxRows={10}
                sx={{
                  alignItems: "flex-start",
                  width: "700px",
                  height: "379px",
                  minHeight: "40px",
                  borderRadius: "10px",
                  backgroundColor: "#E5EBF2",
                  fontFamily: "SVN-Gilroy",
                  px: "25px",
                }}
                placeholder="Nh???p n???i dung c???a b???n...."
              />
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems="center"
            justifyContent={"flex-start"}
            gap={5}
            paddingX="110px"
            pt="16px"
          >
            <Typography color="#022C59" minWidth={"180px"} fontSize="18px">
              File ????nh k??m
            </Typography>
            <Stack direction={"row"} alignItems="center" gap={2}>
              <Stack direction={"row"} alignItems="center">
                <Typography minWidth={"180px"} fontSize="18px">
                  CV
                </Typography>
                <Stack direction={"row"} alignItems="center" gap={2}>
                  <img
                    width={"50px"}
                    height={"50px"}
                    src={"assets/cvImage.png"}
                  />
                  <Typography
                    fontFamily={"SVN-Gilroy"}
                    fontSize="14px"
                    fontWeight={"300"}
                    color="#FF4601"
                  >
                    CV_SE151222_TR???N NGUY???N V??N AN.pdf
                  </Typography>
                  <Box onClick={() => navigate("/editprofile")}>
                    <img
                      width={"25px"}
                      height={"25px"}
                      src={"assets/editProfileIcon.png"}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" px="110px">
            <Button
              onClick={() => navigate("/login")}
              variant="outlined"
              sx={{
                height: "80px",
                width: "180px",
                backgroundColor: "#FFFFF",
                color: "#FF4601",
                borderColor: "#FF4601",
                borderRadius: "40px",
                ":hover": {
                  backgroundColor: "#cec7c762",
                  borderColor: "#FF4601",
                  opacity: 0.8,
                },
              }}
            >
              <Typography fontSize={"20px"} textTransform={"capitalize"}>
                Quay l???i
              </Typography>
            </Button>
            <Box minWidth="400px" pl="40px">
              <Button
                variant="contained"
                sx={{
                  height: "80px",
                  width: "236px",
                  backgroundColor: "#FF4601",
                  color: "#FFFFF",
                  borderRadius: "40px",
                  ":hover": {
                    backgroundColor: "#FF4601",
                    opacity: 0.8,
                  },
                }}
                onClick={handleClickOpen}
              >
                <Stack direction={"row"} gap={1} alignItems="center">
                  <Typography
                    lineHeight={"34.75px"}
                    fontSize={"24px"}
                    textTransform={"capitalize"}
                  >
                    ???ng tuy???n
                  </Typography>
                </Stack>
              </Button>
              {/* Dialog popup 1 */}

              <Dialog
                sx={{
                  width: "1170px",
                  height: "908px",
                  borderRadius: "10px",

                  display: "relative",
                  left: "20vw",
                  top: "4vh",
                  "& .css-a2pcql-MuiPaper-root-MuiDialog-paper, .css-v1jc08": {
                    boxShadow: "0px 0px 20px 1px #F8450133",
                  },
                }}
                open={open}
                onClose={handleClose}
              >
                <Stack pt="44px"></Stack>
                <DialogContent>
                  <Typography
                    fontFamily={"Dela Gothic One"}
                    fontSize="32px"
                    fontWeight={400}
                    color={"#022C59"}
                    // pt={"43px"}
                    pl="100px"
                    pb="60px"
                    width={"100%"}
                  >
                    Tr???n Nguy???n V??n An _ Software Developer Intern
                  </Typography>
                  <DialogContentText>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      alignItems="flex-start"
                      justifyContent={"flex-start"}
                      gap={5}
                      paddingX="110px"
                      pt="16px"
                    >
                      <Typography
                        color="#022C59"
                        minWidth={"180px"}
                        fontSize="18px"
                      >
                        Email
                      </Typography>
                      <Stack direction={"row"} alignItems="center">
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"300"}
                        >
                          AnTNVSE151222@fpt.edu.vn
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      alignItems="flex-start"
                      justifyContent={"flex-start"}
                      gap={5}
                      paddingX="110px"
                      pt="16px"
                    >
                      <Typography
                        color="#022C59"
                        minWidth={"180px"}
                        fontSize="18px"
                      >
                        Ng?????i nh???n
                      </Typography>
                      <Stack direction={"row"} alignItems="center">
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"300"}
                        >
                          svcinfo@schaeffler.com
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      alignItems="flex-start"
                      justifyContent={"flex-start"}
                      gap={5}
                      paddingX="110px"
                      pt="16px"
                    >
                      <Typography
                        color="#022C59"
                        minWidth={"180px"}
                        fontSize="18px"
                      >
                        Ti??u ?????
                      </Typography>
                      <Stack direction={"row"} alignItems="center">
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"300"}
                        >
                          Tr???n Nguy???n V??n An_Software Developer Intern
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      alignItems="flex-start"
                      justifyContent={"flex-start"}
                      gap={5}
                      paddingX="110px"
                      pt="16px"
                      pb="10px"
                    >
                      <Typography
                        color="#022C59"
                        minWidth={"180px"}
                        fontSize="18px"
                      >
                        N???i dung
                      </Typography>
                      <Stack direction={"row"}>
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"400"}
                        >
                          K??nh g???i ph??ng nh??n s??? c???a c??ng ty TNHH Schaeffler
                          Vi???t Nam <br /> T??i l?? Tr???n Nguy???n V??n An, hi???n ??ang
                          l?? sinh vi??n c???a ?????i h???c FPT v???i chuy??n ng??nh K??? thu???t
                          ph???n m???m. <br /> Theo nh?? m?? t??? c??ng vi???c trong ph???n
                          tuy???n d???ng c???a c??ng ty, t??i tin r???ng b???n th??n c?? th???
                          ????p ???ng 99% c??c y??u c???u c??ng vi???c cho v??? tr?? n??y, v??
                          ????? ti???m n??ng ????? tr??? th??nh m???t th???c t???p sinh gi???i m??
                          c??ng ty ??ang t??m ki???m.
                          <br /> T??i c?? g???i k??m CV theo email n??y. R???t mong c??ng
                          ty d??nh th?????i gian xem x??t. <br /> Tr??n tr???ng, <br />{" "}
                          V??n An
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      alignItems="center"
                      justifyContent={"flex-start"}
                      gap={5}
                      paddingX="110px"
                      pt="16px"
                    >
                      <Typography
                        color="#022C59"
                        minWidth={"180px"}
                        fontSize="18px"
                      >
                        File ????nh k??m
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={2}>
                        <Stack direction={"row"} alignItems="center">
                          <Typography
                            color="#022C59"
                            minWidth={"180px"}
                            fontSize="18px"
                          >
                            CV
                          </Typography>
                          <Stack direction={"row"} alignItems="center" gap={2}>
                            <img
                              width={"50px"}
                              height={"50px"}
                              src={"assets/cvImage.png"}
                            />
                            <Typography
                              fontFamily={"SVN-Gilroy"}
                              fontSize="14px"
                              fontWeight={"300"}
                              color="#FF4601"
                            >
                              CV_SE151222_TR???N NGUY???N V??N AN.pdf
                            </Typography>
                            <Box onClick={() => navigate("/editprofile")}>
                              <img
                                width={"25px"}
                                height={"25px"}
                                src={"assets/editProfileIcon.png"}
                              />
                            </Box>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </DialogContentText>
                  <Stack
                    direction={"row"}
                    spacing="40px"
                    paddingY={"40px"}
                    px="110px"
                  >
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      sx={{
                        height: "80px",
                        width: "180px",
                        backgroundColor: "#FFFFF",
                        color: "#FF4601",
                        borderColor: "#FF4601",
                        borderRadius: "40px",
                        ":hover": {
                          backgroundColor: "#cec7c762",
                          borderColor: "#FF4601",
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Typography
                        fontSize={"20px"}
                        textTransform={"capitalize"}
                      >
                        H???y b???
                      </Typography>
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        height: "80px",
                        width: "236px",
                        backgroundColor: "#FF4601",
                        color: "#FFFFF",
                        borderRadius: "40px",
                        ":hover": {
                          backgroundColor: "#FF4601",
                          opacity: 0.8,
                        },
                      }}
                      // onClick={() => saveProfile()}
                      onClick={handleClickOpen1}
                    >
                      <Stack direction={"row"} gap={1} alignItems="center">
                        <Typography
                          lineHeight={"34.75px"}
                          fontSize={"24px"}
                          textTransform={"capitalize"}
                        >
                          ???ng tuy???n
                        </Typography>
                      </Stack>
                    </Button>
                    {/* Dialog 3 */}
                    <Dialog
                      open={open1}
                      onClose={handleClose1}
                      sx={{
                        border: "10px",

                        "& .css-a2pcql-MuiPaper-root-MuiDialog-paper, .css-v1jc08":
                          {
                            boxShadow: "0px 0px 20px 1px #F8450133",
                          },
                      }}
                    >
                      {" "}
                      <Stack
                        direction={"row"}
                        sx={{ paddingLeft: "72px", pt: "41px" }}
                      >
                        <Typography
                          fontFamily={"Dela Gothic One"}
                          fontSize="36px"
                          fontWeight={400}
                          lineHeight="52.13px"
                          color={"#FF4601"}
                        >
                          X??C NH???N ???NG TUY???N
                        </Typography>
                        <Box
                          height="40px"
                          sx={{
                            width: "69px",
                            borderBottom: "solid",
                            borderColor: "#FF46014D",
                            borderWidth: "2px",
                          }}
                        />
                      </Stack>
                      <DialogContent>
                        <Stack
                          direction={"row"}
                          sx={{ paddingLeft: "48px", pt: "10px" }}
                        >
                          <Typography
                            fontFamily={"SVN-Gilroy"}
                            fontSize="18px"
                            fontWeight={400}
                            lineHeight="27px"
                            color={"#363534"}
                          >
                            B???n ch???c ch???n mu???n g???i h??? s?? ???ng tuy???n?
                          </Typography>
                        </Stack>
                      </DialogContent>
                      <Stack pl={"65px"} direction={"row"} pb="49px">
                        <Button onClick={handleClose1}>
                          <Typography
                            color={"#FF4601"}
                            border=" 2px solid #FF4601"
                            borderRadius={"40px"}
                            paddingY={"10px"}
                            fontFamily={"SVN-Gilroy"}
                            width={"150px"}
                            fontSize="18px"
                            fontWeight={"600"}
                          >
                            Tho??t
                          </Typography>
                        </Button>
                        <Button onClick={handleClickOpen2}>
                          <Typography
                            sx={{ backgroundColor: "#FF4601" }}
                            color={"white"}
                            border=" 2px solid #FF4601"
                            borderRadius={"40px"}
                            paddingY={"10px"}
                            fontFamily={"SVN-Gilroy"}
                            width={"150px"}
                            fontSize="18px"
                            fontWeight={"600"}
                          >
                            Ti???p t???c
                          </Typography>
                        </Button>
                      </Stack>
                      <Dialog
                        sx={{
                          border: "10px",
                          "& .css-a2pcql-MuiPaper-root-MuiDialog-paper, .css-v1jc08":
                            {
                              boxShadow: "0px 0px 20px 1px #F8450133",
                            },
                        }}
                        open={open2}
                        onClose={handleClose2}
                      >
                        <Stack
                          direction={"row"}
                          sx={{ paddingLeft: "72px", pt: "41px" }}
                        >
                          <Typography
                            fontFamily={"Dela Gothic One"}
                            fontSize="36px"
                            fontWeight={400}
                            lineHeight="52.13px"
                            color={"#FF4601"}
                          >
                            X??C NH???N TH??NH C??NG
                          </Typography>
                          <Box
                            height="40px"
                            sx={{
                              marginLeft: "59px",
                              width: "405px",
                              borderBottom: "solid",
                              borderColor: "#FF46014D",
                              borderWidth: "2px",
                            }}
                          />
                        </Stack>
                        <DialogContent>
                          <Stack
                            direction={"row"}
                            sx={{ paddingLeft: "48px", pt: "10px" }}
                          >
                            <Typography
                              fontFamily={"SVN-Gilroy"}
                              fontSize="18px"
                              fontWeight={400}
                              lineHeight="27px"
                              color={"#363534"}
                            >
                              ????n ???ng tuy???n c???a b???n ???? ???????c g???i th??nh c??ng.
                              Th?????ng xuy??n ki???m tra email v?? trang qu?? tr??nh ???ng
                              <br /> tuy???n ????? c???p nh???t th??ng tin nhanh ch??ng.
                            </Typography>
                          </Stack>
                        </DialogContent>
                        <Stack pl={"72px"} direction={"row"} pb="49px">
                          <Button
                            sx={{
                              border: "2px solid #FF4601",
                              borderRadius: "40px",
                            }}
                            paddingLeft="25.5px"
                            paddingY={"10px"}
                            width={"150px"}
                            onClick={() => navigate("/")}
                          >
                            <Typography
                              color={"#FF4601"}
                              fontFamily="SVN-Gilroy"
                            >
                              V??? trang ch???
                            </Typography>
                          </Button>
                        </Stack>
                      </Dialog>
                    </Dialog>
                  </Stack>
                </DialogContent>
              </Dialog>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ApplyForm;
