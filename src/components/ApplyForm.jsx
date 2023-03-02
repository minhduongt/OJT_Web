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
            Nữ
          </MenuItem>
        </StyledMenu>
        <Typography
          color={"#FF4601"}
          fontFamily={"SVN-Gilroy"}
          fontWeight="300"
        >
          *Bắt buộc
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
          title: "Vui lòng chọn tệp có kích thước nhỏ hơn",
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
      title: "Họ và tên",
      placeholder: "Họ và tên của bạn",
      optional: "Bắt buộc",
      type: "text",
      value: "Trần Nguyễn Văn An",
    },
    {
      title: "Giới tính",
      placeholder: "Chọn",
      optional: "Bắt buộc",
      value: "Nam",
    },
    {
      title: "MSSV",
      placeholder: "Mã số sinh viên của bạn",
      optional: "Bắt buộc",
      type: "text",
      value: "SE151222",
    },
    {
      title: "Ngành học",
      placeholder: "Khối ngành_Ngành",
      optional: "Bắt buộc",
      type: "text",
      value: "Công nghệ thông tin_Kỹ thuật phần mềm",
    },
    {
      title: "Ngày sinh",
      placeholder: "Ngày/tháng/năm",
      optional: "Bắt buộc",
      type: "date",
      value: "01/01/2001",
    },
    {
      title: "Địa chỉ",
      placeholder: "Địa chỉ hiện tại của bạn",
      optional: "Bắt buộc",
      type: "address",
      value:
        "30, Lã Xuân Oai, phường Long Trường, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    },
    {
      title: "Điện thoại liên lạc",
      placeholder: "Số điện thoại của bạn",
      optional: "Bắt buộc",
      type: "text",
      value: "0988 124 341",
    },
    {
      title: "Email",
      placeholder: "sample@fpt.edu.vn",
      optional: "Bắt buộc",
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
              Người nhận
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
              Tiêu đề
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <Typography
                fontFamily={"SVN-Gilroy"}
                fontSize="18px"
                fontWeight={"300"}
              >
                Trần Nguyễn Văn An_Software Developer Intern
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
              Nội dung
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
                placeholder="Nhập nội dung của bạn...."
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
              File đính kèm
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
                    CV_SE151222_TRẦN NGUYỄN VĂN AN.pdf
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
                Quay lại
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
                    Ứng tuyển
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
                    Trần Nguyễn Văn An _ Software Developer Intern
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
                        Người nhận
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
                        Tiêu đề
                      </Typography>
                      <Stack direction={"row"} alignItems="center">
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"300"}
                        >
                          Trần Nguyễn Văn An_Software Developer Intern
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
                        Nội dung
                      </Typography>
                      <Stack direction={"row"}>
                        <Typography
                          fontFamily={"SVN-Gilroy"}
                          fontSize="18px"
                          fontWeight={"400"}
                        >
                          Kính gửi phòng nhân sự của công ty TNHH Schaeffler
                          Việt Nam <br /> Tôi là Trần Nguyễn Văn An, hiện đang
                          là sinh viên của đại học FPT với chuyên ngành Kỹ thuật
                          phần mềm. <br /> Theo như mô tả công việc trong phần
                          tuyển dụng của công ty, tôi tin rằng bản thân có thể
                          đáp ứng 99% các yêu cầu công việc cho vị trí này, và
                          đủ tiềm năng để trở thành một thực tập sinh giỏi mà
                          công ty đang tìm kiếm.
                          <br /> Tôi có gửi kèm CV theo email này. Rất mong công
                          ty dành thười gian xem xét. <br /> Trân trọng, <br />{" "}
                          Văn An
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
                        File đính kèm
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
                              CV_SE151222_TRẦN NGUYỄN VĂN AN.pdf
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
                        Hủy bỏ
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
                          Ứng tuyển
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
                          XÁC NHẬN ỨNG TUYỂN
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
                            Bạn chắc chắn muốn gửi hồ sơ ứng tuyển?
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
                            Thoát
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
                            Tiếp tục
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
                            XÁC NHẬN THÀNH CÔNG
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
                              Đơn ứng tuyển của bạn đã được gửi thành công.
                              Thường xuyên kiểm tra email và trang quá trình ứng
                              <br /> tuyển để cập nhật thông tin nhanh chóng.
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
                              Về trang chủ
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
