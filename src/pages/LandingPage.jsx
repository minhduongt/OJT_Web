import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PrimaryCarousel from "../components/PrimaryCarousel";
import { useNavigate } from "react-router-dom";

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
    name: "smartland",
    picurl: "/assets/smartland.png",
  },
  {
    name: "luckytech",
    picurl: "/assets/luckytech.png",
  },
  {
    name: "bestb",
    picurl: "/assets/bestb.png",
  },
  {
    name: "elca",
    picurl: "/assets/elca.png",
  },
];

const CompanyList2 = [
  {
    name: "netcompany",
    picurl: "/assets/netcompany.png",
  },
  {
    name: "renaissance",
    picurl: "/assets/renaissance.png",
  },
  {
    name: "geek",
    picurl: "/assets/geek.png",
  },
  {
    name: "manulife",
    picurl: "/assets/manulife.png",
  },
  {
    name: "smartpay",
    picurl: "/assets/smartpay.png",
  },
];

const CompanyList3 = [
  {
    name: "major",
    picurl: "/assets/major.png",
  },
  {
    name: "fpts",
    picurl: "/assets/fpts.png",
  },
  {
    name: "kms",
    picurl: "/assets/kms.png",
  },
  {
    name: "cattiensa",
    picurl: "/assets/cattiensa.png",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Section 1--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          minWidth={"271px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          TRANG CHỦ
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
      <Container
        sx={{
          marginTop: "200px",
          height: "755px",
          // backgroundImage: `url(assets/fptu.png)`,
          // backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="assets/fptu.png"
          style={{ position: "absolute", width: "100%" }}
        />
        <Stack
          spacing={3}
          direction={"column"}
          paddingX="210px"
          sx={{ position: "relative", bottom: "100px" }}
        >
          <Typography
            width={"1500px"}
            height={"272px"}
            lineHeight={"144px"}
            fontSize={"120px"}
            color="#022C59"
            fontFamily={"Dela Gothic One"}
          >
            Tìm kiếm công việc phù hợp với bạn
          </Typography>
          <Button
            onClick={() => navigate("/jobs")}
            sx={{
              borderRadius: "94px",
              boxShadow: "0px 0px 20px 0px #022C594D",
              width: "400px",
              height: "100px",
              backgroundColor: "#FF4601",
              color: "#F8FBFF",
              ":hover": {
                backgroundColor: "#FF4601",
                opacity: 0.8,
              },
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
            borderRadius: "20px",
            // border: "solid",
            // borderColor: "#FF4601",
            // borderWidth: "4px",
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
      <Stack direction={"row"} sx={{ paddingTop: "247px", paddingX: "100px" }}>
        <Box
          sx={{
            marginRight: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
          height="40px"
        />
        <Typography
          minWidth="550px"
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          textAlign="end"
          height="40px"
        >
          TỔNG QUAN GIAO DIỆN
        </Typography>
      </Stack>
      <Stack alignItems={"center"} width="100%">
        <Typography
          paddingTop="90px"
          paddingX={"210px"}
          color="#363534"
          fontWeight="600"
          fontSize="30px"
          lineHeight={"150%"}
          fontFamily={"SVN-Gilroy"}
        >
          Hiểu rõ nhu cầu tìm công việc thực tập của sinh viên trường F, giao
          diện mới ra đời nhằm mang đến trải nghiệm tốt hơn, tạo cơ hội cho các
          bạn sinh viên có nhiều lựa chọn hơn trong quá trình tìm kiếm công việc
          phù hợp với bản thân.
        </Typography>
      </Stack>
      <Container minHeight="690px">
        <PrimaryCarousel />
      </Container>

      {/* Section 3--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "20px", paddingX: "100px" }}>
        <Typography
          minWidth={"474px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="52px"
        >
          TÍNH NĂNG NỔI BẬT
        </Typography>
        <Box
          sx={{
            height: "52px",
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
            src={`/assets/feature1.png`}
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
            src={`/assets/feature2.png`}
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
            src={`/assets/feature3.png`}
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
      <Stack
        direction={"row"}
        sx={{ maxHeight: "40px", paddingTop: "147px", paddingX: "100px" }}
      >
        <Box
          sx={{
            marginRight: "59px",
            width: "1390px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
            height: "40px",
          }}
        />
        <Typography
          minWidth="590px"
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          textAlign="end"
          height="40px"
        >
          DOANH NGHIỆP LIÊN KẾT
        </Typography>
      </Stack>
      <Stack pt="60px" mb={"-400px"} alignItems={"center"}>
        <Typography
          lineHeight={"150%"}
          paddingTop="90px"
          color="#363534"
          fontWeight="600"
          fontSize="30px"
          maxWidth="1500px"
          fontFamily={"SVN-Gilroy"}
          fontStyle="normal"
        >
          Liên kết hơn 40 doanh nghiệp, tạo cơ hội tìm kiếm công việc thực tập
          cho sinh viên FPT
        </Typography>
        <Stack
          height={"23px"}
          paddingTop={"80px"}
          paddingBottom="40px"
          width={"100%"}
          alignItems="flex-end"
          px="330px"
        >
          <Typography
            color="#676565"
            fontSize={"18px"}
            fontWeight={"300"}
            fontStyle={"italic"}
            fontFamily="SVN-Gilroy"
            onClick={() => navigate("/companies")}
            sx={{
              ":hover": {
                cursor: "pointer",
                fontWeight: "400",
              },
            }}
          >
            Xem thêm các công ty
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={4}>
          {CompanyList1.map((com) => {
            return (
              <Box
                borderRadius={"20px"}
                boxShadow={"0px 0px 20px 1px rgba(255, 70, 1, 0.15)"}
                width="180px"
                height="80px"
                sx={{ backgroundImage: `url(${com.picurl})` }}
                backgroundColor="white"
              />
            );
          })}
        </Stack>
        <Stack pt="20px" direction={"row"} spacing={4}>
          {CompanyList2.map((com) => {
            return (
              <Box
                borderRadius={"20px"}
                boxShadow={"0px 0px 20px 1px rgba(255, 70, 1, 0.15)"}
                width="180px"
                height="80px"
                sx={{ backgroundImage: `url(${com.picurl})` }}
                backgroundColor="white"
              />
            );
          })}
        </Stack>
        <Stack pt="20px" direction={"row"} spacing={4}>
          {CompanyList3.map((com) => {
            return (
              <Box
                borderRadius={"20px"}
                boxShadow={"0px 0px 20px 1px rgba(255, 70, 1, 0.15)"}
                width="180px"
                height="80px"
                sx={{ backgroundImage: `url(${com.picurl})` }}
                backgroundColor="white"
              />
            );
          })}
        </Stack>
      </Stack>
      <Stack minHeight={"470px"}></Stack>
      {/* Section 5--------- */}
      <Stack direction={"row"} sx={{ paddingTop: "120px", paddingX: "100px" }}>
        <Typography
          width={"474px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="40px"
        >
          VỀ CHÚNG MÌNH
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
      <Typography
        paddingTop="80px"
        paddingLeft={"210px"}
        color="#022C59"
        fontSize="70px"
        lineHeight={"130%"}
        fontFamily="Dela Gothic One"
        fontWeight="400"
      >
        Nhóm
      </Typography>
      <Stack
        justifyContent={"space-between"}
        paddingTop="80px"
        direction="row"
        paddingX="210px"
        paddingBottom={"200px"}
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
            src="../assets/huynhdangkhoi.png"
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
            src="../assets/nguyenquetran.png"
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
            src="../assets/Ngan.png"
          />
          <Stack>
            <Typography
              width={"196px"}
              color="#022C59"
              fontSize={"32px"}
              lineHeight="130%"
            >
              Nguyễn Thị Hồng Ngân
            </Typography>
            <Typography fontSize={"18px"} lineHeight="150%">
              SE160523
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingPage;
