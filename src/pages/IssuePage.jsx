import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IssuePage = () => {
  const navigate = useNavigate();
  const [currentTab, SetCurrentTab] = useState(0);
  const buttonList = [
    {
      index: 0,
      title: "TẠM HOÃN OJT",
    },
    {
      index: 1,
      title: "ĐỀ XUẤT DOANH NGHIỆP ĐI OJT",
    },
    {
      index: 2,
      title: "PHẢN HỒI VỀ DOANH NGHIỆP",
    },
  ];
  return (
    <Container
      w="1920px"
      sx={{
        minHeight: "1080px",
        // backgroundImage: `url(assets/profileBg.png)`,
        p: 0,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          paddingTop: "120px",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "100px",
        }}
      >
        <Typography
          minWidth={"390px"}
          color="#FF4601"
          fontSize={"36px"}
          fontWeight={400}
          height="52px"
          lineHeight={"52px"}
        >
          CÁC VẤN ĐỀ OJT
        </Typography>
        <Stack
          height="52px"
          sx={{
            marginLeft: "10px",
            width: "1320px",
            borderBottom: "solid",
            borderColor: "#FF46014D",
            borderWidth: "2px",
          }}
        />
      </Stack>
      <Stack>
        <Stack direction="row" px="210px" gap="38px" pt="80px">
          {buttonList.map((button) => {
            return (
              <Button
                key={button.index}
                variant="outlined"
                onClick={() => SetCurrentTab(button.index)}
                sx={{
                  height: "80px",
                  borderRadius: "40px",
                  color: button.index === currentTab ? "#FF4601" : "#676565",
                  borderColor:
                    button.index === currentTab ? "#FF4601" : "#676565",
                  ":hover": {
                    borderColor:
                      button.index === currentTab ? "#FF4601" : "#676565",
                  },
                }}
              >
                <Typography
                  fontFamily={"SVN-Gilroy"}
                  fontSize="24px"
                  lineHeight={"24px"}
                  px="15px"
                >
                  {button.title}
                </Typography>
              </Button>
            );
          })}
        </Stack>
        <Stack px="320px" gap="10px" pt="120px" pb="200px">
          <Typography color="#022C59" fontSize="70px" lineHeight="91px">
            Tạm hoãn OJT
          </Typography>
          <Typography
            fontSize="18px"
            lineHeight="27px"
            fontFamily={"SVN-Gilroy"}
            pt="40px"
            pb="17px"
          >
            Trường hợp sinh viên đủ điều kiện đi OJT nhưng có nguyện vọng tạm
            hoãn để tiếp tục học và đi OJT ở kỳ tiếp theo, sinh viên phải liên
            hệ Phòng Tổ chức và Quản lý đào tạo để thông báo và được hướng dẫn.
          </Typography>
          <Typography color="#022C59" fontSize="32px" lineHeight="46px">
            Các bước liên hệ
          </Typography>
          <Typography
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pr="5px"
              lineHeight={"27px"}
            >
              BƯỚC 1:
            </Typography>
            Sinh viên đăng nhập trang FAP:
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              lineHeight={"27px"}
              fontWeight="500"
              pl="5px"
              sx={{
                textDecoration: "underline",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate("https://fap.fpt.edu.vn/")}
            >
              fap.fpt.edu.vn
            </Typography>
          </Typography>
          <Typography
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pr="5px"
              lineHeight={"27px"}
            >
              BƯỚC 2:
            </Typography>
            Ở phần{" "}
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              lineHeight={"27px"}
            >
              Registration/Application(Thủ tục/đơn từ)
            </Typography>
            , sinh viên vào mục
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pl="5px"
              lineHeight={"27px"}
            >
              Send Application( Gửi đơn)
            </Typography>
          </Typography>
          <Typography
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pr="5px"
              lineHeight={"27px"}
            >
              BƯỚC 3:
            </Typography>
            Sinh viên điền đầy đủ nội dung, gồm:
          </Typography>
          {/*  */}
          <Typography
            pl="20px"
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            Application Type:
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pl="5px"
              lineHeight={"27px"}
            >
              CÁC LOẠI ĐƠN KHÁC
            </Typography>
          </Typography>

          <Typography
            pl="20px"
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            Purpose:
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pl="5px"
              lineHeight={"27px"}
            >
              GHI NGUYỆN VỌNG TẠM HOÃN OJT ĐỂ TIẾP TỤC HỌC VÀ NÊU RÕ LÝ DO
            </Typography>
          </Typography>
          <Typography
            pl="20px"
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            File Attach:
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pl="5px"
              lineHeight={"27px"}
            >
              ĐÍNH KÈM GIẤY TỜ MINH CHỨNG LÝ DO( NẾU CÓ)
            </Typography>
          </Typography>
          <img width="1280px" height={"770px"} src="assets/suspendImage.png" />
          <Typography
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pr="5px"
              lineHeight={"27px"}
            >
              BƯỚC 4:
            </Typography>
            Sau ghi gửi đơn, sinh viên thường xuyên kiểm tra kết quả đơn ở mục
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pl="5px"
              lineHeight={"27px"}
            >
              View Application(Xem đơn)
            </Typography>
            .
          </Typography>
          <Typography color="#022C59" fontSize={"32px"} lineHeight={"46px"}>
            Lưu ý
          </Typography>
          <Typography
            display={"inline-block"}
            direction={"row"}
            fontSize="18px"
            fontFamily={"SVN-Gilroy"}
            fontWeight="400"
            lineHeight={"27px"}
          >
            <Typography
              fontFamily={"SVN-Gilroy"}
              display={"inline-block"}
              fontWeight="600"
              width={"auto"}
              pr="5px"
              lineHeight={"27px"}
            >
              Trong vòng 1 tuần
            </Typography>
            kể từ đợt đăng ký ứng tuyển online trên website, sinh viên không
            tham gia đăng ký online cũng như không nộp đơn tạm hoãn OJT sẽ tuân
            thủ sự sắp xếp của nhà trường.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default IssuePage;
