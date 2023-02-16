import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PrimaryCarousel from "../components/PrimaryCarousel";

const LandingPage = () => {
  return (
    <>
      {/* Section 1--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          minWidth={"271px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
        >
          TRANG CHỦ
        </Typography>
        <Box
          sx={{
            marginLeft: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Container
        sx={{
          marginTop: "200px",
          height: "755px",
          backgroundImage: `url(src/assets/fptu.png)`,
        }}
      >
        <Stack
          spacing={3}
          direction={"column"}
          paddingX="210px"
          sx={{ position: "relative", bottom: "100px" }}
        >
          <Typography
            height={"272px"}
            lineHeight={"144px"}
            fontSize={"120px"}
            color="#022C59"
          >
            Tìm kiếm công việc phù hợp với bạn
          </Typography>
          <Button
            sx={{
              borderRadius: "94px",
              boxShadow: "0px 0px 20px 0px #022C594D",
              width: "400px",
              height: "100px",
              backgroundColor: "#FF4601",
              color: "#F8FBFF",
            }}
          >
            <Typography fontSize={"32px"} lineHeight="46px">
              TÌM VIỆC NGAY
            </Typography>
          </Button>
        </Stack>
        <Container
          sx={{
            position: "relative",
            boxShadow: "0px 0px 20px 1px #FF46014D",
            width: "1360px",
            height: "200px",
            backgroundColor: "#FFFFFF",
            border: "solid",
            borderColor: "#FF4601",
            borderWidth: "4px",
            top: "250px",
          }}
        >
          <Stack
            paddingX="110px"
            direction={"row"}
            justifyContent="space-between"
          >
            <Stack textAlign="center">
              <Typography
                lineHeight={"101px"}
                width={"260px"}
                height="101px"
                fontSize={"70px"}
                color="#022C59"
              >
                40+
              </Typography>
              <Typography
                lineHeight={"130%"}
                width={"260px"}
                height="78px"
                fontSize={"30px"}
                fontWeight={600}
                fontFamily="SVN-Gilroy"
              >
                Doanh nghiệp liên kết với trường
              </Typography>
            </Stack>
            <Stack textAlign="center">
              <Typography
                lineHeight={"101px"}
                width={"260px"}
                height="101px"
                fontSize={"70px"}
                color="#FF4601"
              >
                200+
              </Typography>
              <Typography
                lineHeight={"130%"}
                width={"260px"}
                height="78px"
                fontSize={"30px"}
                fontWeight={600}
                fontFamily="SVN-Gilroy"
              >
                Sinh viên nộp hồ sơ thành công
              </Typography>
            </Stack>

            <Stack textAlign="center">
              <Typography
                lineHeight={"101px"}
                width={"260px"}
                height="101px"
                fontSize={"70px"}
                color="#022C59"
              >
                120+
              </Typography>
              <Typography
                lineHeight={"130%"}
                width={"260px"}
                height="78px"
                fontSize={"30px"}
                fontWeight={600}
                fontFamily="SVN-Gilroy"
              >
                Feedback từ sinh viên sau thực tập
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Container>
      {/* Section 2--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Box
          sx={{
            marginRight: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
        <Typography
          paddingTop="100px"
          minWidth="550px"
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          textAlign="end"
        >
          TỔNG QUAN GIAO DIỆN
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          paddingTop="90px"
          paddingX={"210px"}
          color="#363534"
          fontWeight="600"
          fontSize="30px"
          lineHeight={"150%"}
          maxWidth="1500px"
        >
          Hiểu rõ nhu cầu tìm công việc thực tập của sinh viên trường F, giao
          diện mới ra đời nhằm mang đến trải nghiệm tốt hơn, tạo cơ hội cho các
          bạn sinh viên có nhiều lựa chọn hơn trong quá trình tìm kiếm công việc
          phù hợp với bản thân.
        </Typography>
      </Stack>
      <Stack minHeight="690px">{/* <PrimaryCarousel /> */}</Stack>

      {/* Section 3--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          minWidth={"474px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
        >
          TÍNH NĂNG NỔI BẬT
        </Typography>
        <Box
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
        justifyContent={"space-between"}
        paddingTop="80px"
        direction="row"
        textAlign={"center"}
        paddingX="210px"
      >
        <Stack alignItems={"center"}>
          <img
            src={`src/assets/feature1.png`}
            alt={"Logo"}
            loading="lazy"
            width={"110px"}
            height="100px"
          />
          <Typography
            paddingTop="41px"
            color="#022C59"
            fontSize="32px"
            fontWeight={"130%"}
            maxWidth="400px"
          >
            Tìm kiếm thông tin nhanh chóng
          </Typography>
          <Typography
            paddingTop="16px"
            color="#363534"
            fontSize="16px"
            fontWeight={"150%"}
            maxWidth="314px"
            fontFamily="SVN-Gilroy"
          >
            Thủ tục đơn giản dễ hiểu, dễ dàng kiểm tra quá trình
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <img
            src={`src/assets/feature2.png`}
            alt={"Logo"}
            loading="lazy"
            width={"110px"}
            height="100px"
          />
          <Typography
            paddingTop="41px"
            color="#022C59"
            fontSize="32px"
            fontWeight={"130%"}
            maxWidth="400px"
          >
            Quản lý đơn từ dễ dàng
          </Typography>
          <Typography
            paddingTop="16px"
            color="#363534"
            fontSize="16px"
            fontWeight={"150%"}
            maxWidth="314px"
            fontFamily="SVN-Gilroy"
          >
            Kiểm soát được thời gian, không bỏ lỡ yêu cầu từ trường, doanh
            nghiệp
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <img
            src={`src/assets/feature3.png`}
            alt={"Logo"}
            loading="lazy"
            width={"110px"}
            height="100px"
          />
          <Typography
            paddingTop="41px"
            color="#022C59"
            fontSize="32px"
            fontWeight={"130%"}
            maxWidth="400px"
          >
            Thông tin đầy đủ, chính xác
          </Typography>
          <Typography
            paddingTop="16px"
            color="#363534"
            fontSize="16px"
            fontWeight={"150%"}
            maxWidth="314px"
            fontFamily="SVN-Gilroy"
          >
            Các công ty đạt chuẩn trường đề ra, được đánh giá minh bạch.
          </Typography>
        </Stack>
      </Stack>
      {/* Section 4--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Box
          sx={{
            marginRight: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
        <Typography
          paddingTop="100px"
          minWidth="590px"
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          textAlign="end"
        >
          DOANH NGHIỆP LIÊN KẾT
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          lineHeight={"150%"}
          paddingTop="90px"
          color="#363534"
          fontWeight="600"
          fontSize="30px"
          maxWidth="1500px"
          fontFamily={"SVN-Gilroy"}
        >
          Liên kết hơn 40 doanh nghiệp, tạo cơ hội tìm kiếm công việc thực tập
          cho sinh viên FPT
        </Typography>
      </Stack>
      <Stack minHeight={"470px"}></Stack>
      {/* Section 5--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          width={"474px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
        >
          VỀ CHÚNG MÌNH
        </Typography>
        <Box
          sx={{
            marginLeft: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Typography
        paddingTop="80px"
        paddingLeft={"210px"}
        color="#022C59"
        fontSize="70px"
        lineHeight={"130%"}
      >
        Nhóm
      </Typography>
      <Stack
        justifyContent={"space-between"}
        paddingTop="80px"
        direction="row"
        paddingX="210px"
      >
        <Stack
          width={"420px"}
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Avatar
            sx={{ width: "180px", height: "180px" }}
            alt="HuynhDangKhoi"
            src="src/assets/huynhdangkhoi.png"
          />
          <Stack>
            <Typography
              width={"196px"}
              color="#022C59"
              fontSize={"32px"}
              lineHeight="130%"
            >
              Huỳnh Đăng Khôi
            </Typography>
            <Typography fontSize={"18px"} lineHeight="150%">
              SE160779
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={"420px"}
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Avatar
            sx={{ width: "180px", height: "180px" }}
            alt="HuynhDangKhoi"
            src="src/assets/nguyenquetran.png"
          />
          <Stack>
            <Typography
              width={"196px"}
              color="#022C59"
              fontSize={"32px"}
              lineHeight="130%"
            >
              Nguyễn Quế Trân
            </Typography>
            <Typography fontSize={"18px"} lineHeight="150%">
              SE151223
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={"420px"}
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          {" "}
          <Avatar
            sx={{ width: "180px", height: "180px" }}
            alt="HuynhDangKhoi"
            src="src/assets/nguyenquockhanh.png"
          />
          <Stack>
            <Typography
              width={"196px"}
              color="#022C59"
              fontSize={"32px"}
              lineHeight="130%"
            >
              Nguyễn Quốc Khánh
            </Typography>
            <Typography fontSize={"18px"} lineHeight="150%">
              SE150835
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingPage;
