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
  Typography,
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
              color: "#b3afaf",
            }}
          >
            Chọn
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

function UserForm() {
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
    }, 500);
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
    },
    {
      title: "Giới tính",
      placeholder: "Chọn",
      optional: "Bắt buộc",
    },
    {
      title: "MSSV",
      placeholder: "Mã số sinh viên của bạn",
      optional: "Bắt buộc",
      type: "text",
    },
    {
      title: "Ngành học",
      placeholder: "Khối ngành_Ngành",
      optional: "Bắt buộc",
      type: "text",
    },
    {
      title: "Ngày sinh",
      placeholder: "Ngày/tháng/năm",
      optional: "Bắt buộc",
      type: "date",
    },
    {
      title: "Địa chỉ",
      placeholder: "Địa chỉ hiện tại của bạn",
      optional: "Bắt buộc",
      type: "address",
    },
    {
      title: "Điện thoại liên lạc",
      placeholder: "Số điện thoại của bạn",
      optional: "Bắt buộc",
      type: "text",
    },
    {
      title: "Email",
      placeholder: "sample@fpt.edu.vn",
      optional: "Bắt buộc",
      type: "email",
    },
  ];

  return (
    <>
      <Stack
        direction={"row"}
        pt="50px"
        px="210px"
        justifyContent={"space-between"}
        width="100%"
      >
        <Stack gap={3} width="480px" alignItems={"center"}>
          <Box
            sx={{
              ":hover": {
                opacity: 0.8,
                pointerEvents: "visible",
              },
            }}
            onClick={() => imageUploader.current.click()}
          >
            <Avatar
              alt="Select Avatar"
              src={previewImage ? previewImage : "assets/noAvatar.png"}
              sx={{ width: "180px", height: "180px" }}
              ref={uploadedImage}
            />
            <Box
              sx={{
                boxShadow: "0px 0px 10px 1px #022C594D",
                borderRadius: "50%",
                position: "relative",
                width: "30px",
                height: "30px",
                left: "127px",
                bottom: "30px",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
              <img
                src="assets/avatarSelect.png"
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "all",
                }}
              />
            </Box>
          </Box>
          <InputBase
            sx={{
              width: "400px",
              height: "40px",
              borderRadius: "40px",
              backgroundColor: "#E5EBF2",
              fontFamily: "SVN-Gilroy",
              pl: "125px",
            }}
            placeholder="Họ và tên của bạn"
          />
          <InputBase
            multiline
            maxRows={4}
            sx={{
              width: "400px",
              minHeight: "40px",
              borderRadius: "40px",
              backgroundColor: "#E5EBF2",
              fontFamily: "SVN-Gilroy",
              px: "125px",
            }}
            placeholder="“Giới thiệu bản thân”"
          />
        </Stack>
        <Stack gap={3} width="950px">
          {listInputs.map((input, index) => {
            if (input.title === "Giới tính") {
              return (
                <Stack
                  key={input.title}
                  width={"100%"}
                  direction={"row"}
                  alignItems="center"
                  justifyContent={"flex-start"}
                  gap={5}
                >
                  <Typography minWidth={"180px"} fontSize="18px">
                    {input.title}
                  </Typography>
                  <SelectGender />
                </Stack>
              );
            } else
              return (
                <Stack
                  width={"100%"}
                  direction={"row"}
                  key={input.title}
                  alignItems="center"
                  justifyContent={"space-between"}
                  gap={1}
                >
                  <Typography minWidth={"180px"} fontSize="18px">
                    {input.title}
                  </Typography>
                  <Stack>
                    <InputBase
                      // type={input.type}
                      sx={{
                        width: "730px",
                        height: "44px",
                        borderRadius: "40px",
                        backgroundColor: "#E5EBF2",
                        fontFamily: "SVN-Gilroy",
                        pl: "30px",
                      }}
                      placeholder={input.placeholder}
                    />
                    <Typography
                      color={"#FF4601"}
                      fontFamily={"SVN-Gilroy"}
                      fontWeight="300"
                    >
                      *Bắt buộc
                    </Typography>
                  </Stack>
                </Stack>
              );
          })}
          <Stack direction="row">
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
                onClick={() => saveProfile()}
                variant="contained"
                sx={{
                  height: "80px",
                  width: "330px",
                  backgroundColor: "#FF4601",
                  color: "#FFFFF",
                  borderRadius: "40px",
                  ":hover": {
                    backgroundColor: "#FF4601",
                    opacity: 0.8,
                  },
                }}
              >
                <Stack direction={"row"} gap={1} alignItems="center">
                  {saved ? (
                    <img
                      width={"30px"}
                      height="30px"
                      src={"assets/check.png"}
                    />
                  ) : (
                    <></>
                  )}
                  <Typography
                    lineHeight={"34.75px"}
                    fontSize={"24px"}
                    textTransform={"capitalize"}
                  >
                    {saved ? "Đã lưu" : "Lưu thông tin"}
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default UserForm;
