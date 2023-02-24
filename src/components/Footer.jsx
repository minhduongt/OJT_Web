import {
  Box,
  Button,
  Container,
  Input,
  InputBase,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const MainFooter = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "0", bgcolor: "#FFF9F4v", minHeight: "290px" }}
    >
      <Stack paddingX={"100px"} direction={"row"} justifyContent="center">
        <Box
          height={"38px"}
          width={"556px"}
          sx={{
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
        <Typography
          width={"620px"}
          height="81px"
          textAlign="center"
          fontSize={"24px"}
          color="#FF4601"
          lineHeight="150%"
        >
          PHÂN HIỆU TRƯỜNG ĐẠI HỌC FPT TẠI THÀNH PHỐ HỒ CHÍ MINH
        </Typography>
        <Box
          height={"38px"}
          width={"556px"}
          sx={{
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        paddingX={"100px"}
        fontFamily="SVN-Gilroy"
        paddingTop={"30px"}
      >
        <Stack direction={"column"}>
          <Stack direction="row" spacing={1} maxWidth={400}>
            <Typography
              fontFamily="SVN-Gilroy"
              fontSize={"16px"}
              lineHeight="150%"
              fontWeight={600}
              color="#676565"
            >
              Địa chỉ:
            </Typography>
            <Typography
              fontFamily="SVN-Gilroy"
              maxWidth={"337px"}
              fontSize={"14px"}
              lineHeight="150%"
              color="#676565"
            >
              Lô E2a-7, Đường D1 Khu Công nghệ cao, phường Long Thạnh Mỹ, thành
              phố Thủ Đức, thành phố Hồ Chí Minh
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} maxWidth={400}>
            <Typography
              fontFamily="SVN-Gilroy"
              fontSize={"16px"}
              lineHeight="150%"
              fontWeight={600}
              color="#676565"
            >
              Email:
            </Typography>
            <Typography
              fontFamily="SVN-Gilroy"
              maxWidth={"337px"}
              fontSize={"14px"}
              lineHeight="150%"
              color="#676565"
            >
              qhdn.fuhcm@fe.edu.vn
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} maxWidth={400}>
            <Typography
              fontFamily="SVN-Gilroy"
              fontSize={"16px"}
              lineHeight="150%"
              fontWeight={600}
              color="#676565"
            >
              Số điện thoại:
            </Typography>
            <Typography
              fontFamily="SVN-Gilroy"
              maxWidth={"337px"}
              fontSize={"14px"}
              lineHeight="150%"
              color="#676565"
            >
              0934-177-713
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          alignContent="center"
          justifyContent={"center"}
          // pr="90px"
        >
          <Typography
            width={"400px"}
            fontFamily="SVN-Gilroy"
            fontSize={"16px"}
            fontWeight={600}
            color="#676565"
            textAlign={"center"}
          >
            Nhập email của bạn để nhận thông báo nhanh nhất
          </Typography>
          <Stack
            // width={"400px"}
            paddingTop={"20px"}
            direction={"row"}
            alignItems="center"
          >
            <InputBase
              sx={{
                width: "400px",
                height: "40px",
                borderRadius: "40px",
                backgroundColor: "#E5EBF2",
                fontFamily: "SVN-Gilroy",
                px: "30px",
                fontStyle: "italic",
                fontWeight: "300",
              }}
              placeholder="sample@fpt.edu.vn"
            />

            <Button
              sx={{
                position: "relative",
                right: "100px",
                height: "40px",
                width: "111px",
                borderRadius: "40px",
                backgroundColor: "#FF4601",
                color: "#F8FBFF",
              }}
            >
              <Typography
                fontFamily="SVN-Gilroy"
                fontWeight={500}
                fontSize="16px"
                fontStyle="normal"
                textTransform={"capitalize"}
              >
                {"Đăng ký"}
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack spacing={1} direction={"column"} textAlign="right">
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontFamily="SVN-Gilroy"
                fontSize="16px"
              >
                Về chúng mình
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontSize="16px"
                fontFamily="SVN-Gilroy"
              >
                Giới thiệu OJT
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontSize="16px"
                fontFamily="SVN-Gilroy"
              >
                Quy định OJT
              </Typography>
            </Link>
          </Stack>
          <Stack
            spacing={1}
            paddingLeft={"40px"}
            direction={"column"}
            textAlign="right"
          >
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontSize="16px"
                fontFamily="SVN-Gilroy"
              >
                Tài khoản của tôi
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontSize="16px"
                fontFamily="SVN-Gilroy"
              >
                Các loại đơn từ
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography
                color="#676565"
                fontWeight={600}
                lineHeight="17px"
                fontSize="16px"
                fontFamily="SVN-Gilroy"
              >
                Chính sách bảo mật
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MainFooter;
