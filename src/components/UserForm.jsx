// material
import { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

function UserForm() {
  const [currentImage, setCurrentImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
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
              pl: "30px",
            }}
            placeholder="Họ và tên của bạn"
          />
          <InputBase
            sx={{
              width: "400px",
              height: "40px",
              borderRadius: "40px",
              backgroundColor: "#E5EBF2",
              fontFamily: "SVN-Gilroy",
              pl: "30px",
            }}
            placeholder="“Giới thiệu bản thân”"
          />
        </Stack>
        <Stack gap={3} width="950px">
          {listInputs.map((input, index) => {
            return (
              <Stack
                width={"100%"}
                direction={"row"}
                key={input.title}
                alignItems="flex-start"
                justifyContent={"space-between"}
                gap={1}
              >
                <Typography minWidth={"180px"} fontSize="18px">
                  {input.title}
                </Typography>
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
              </Stack>
            );
          })}
          <Stack direction="row">
            <Button
              onClick={() => navigate("/profile")}
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
              <Typography>Quay lại</Typography>
            </Button>
            <Box minWidth="400px" pl="40px">
              <Button
                onClick={() => navigate("/profile")}
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
                <Typography>Lưu thông tin</Typography>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default UserForm;
