// material
import {
  Box,
  Link,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

function StepContent(props) {
  const navigate = useNavigate();
  const ContentWithIcon = (props) => {
    const { iconImage, title, subtitle, sx: style } = props;
    return (
      <Stack direction={"row"} gap={"40px"} {...style}>
        <img width={"70px"} height="70px" src={iconImage} />
        <Stack gap={"10px"}>
          <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
            {title}
          </Typography>
          <Typography
            maxWidth={"950px"}
            minWidth="400px"
            fontSize={"18px"}
            color="#363534"
            lineHeight={"27px"}
            fontFamily="SVN-Gilroy"
          >
            {subtitle}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const { currentStep } = props;
  switch (currentStep) {
    case 0:
      return (
        <Stack gap="60px" pb="500px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Tập huấn trước OJT
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Trước thời điểm OJT 8 tuần"
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Tất cả sinh viên dự kiến đi OJT"
                />
              </Stack>
              <ContentWithIcon
                sx={{ width: "1050px" }}
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle="Phổ biến các quy định về OJT, hướng dẫn các thủ tục, cách thức hoàn thiện hồ sơ cá nhân, đăng ký OJT và giải đáp thắc mắc cho sinh viên"
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle="Căn cứ kết quả học tập hiện tại, Phòng Tổ chức và Quản lý đào tạo lập danh sách sinh viên dự kiến đi OJT và thông báo cho sinh viên về thời gian và địa điểm tổ chức"
              />
            </Stack>
            <Stack>
              <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
                Lưu ý
              </Typography>
              <Typography
                width={"400px"}
                fontSize={"18px"}
                color="#363534"
                lineHeight={"27px"}
                fontFamily="SVN-Gilroy"
              >
                <Stack pb="20px" />
                Đây là điều kiện bắt buộc, các trường hợp vắng phải có lý do và
                thông báo cho Phòng Tổ chức và Quản lý đào tạo để tham gia và
                đợt tập huấn bổ sung (nếu có)
                <Stack pb="10px" />
                Sinh viên bắt đầu hoàn thiện hồ sơ cá nhân trên trang thông tin
                OJT và tìm hiểu thông tin tham khảo về các doanh nghiệp dự kiến
                tiếp nhận OJT để chuẩn bị cho việc đăng ký.
                <Stack pb="10px" />
                Bắt đầu tiếp nhận yêu cầu tạm hoãn (bảo lưu) OJT để tiếp tục học
                và đi OJT vào kỳ tiếp theo.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    case 1:
      return (
        <Stack gap="60px" pb="200px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Đăng ký OJT
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Trước thời điểm OJT 4 tuần (căn cứ vào tình hình thực tế có thể cho đăng ký bổ sung)"
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Sinh viên chính thức được Trưởng ban đào tạo phê duyệt đi OJT"
                />
              </Stack>
              <ContentWithIcon
                sx={{ width: "1050px" }}
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle={
                  <>
                    Tiếp nhận đăng ký doanh nghiệp OJT của sinh viên gồm:
                    <Stack pl="20px" pt="10px">
                      Các doanh nghiệp do nhà trường cung cấp sẵn
                      <Stack pb="10px" />
                      Các doanh nghiệp do sinh viên đề xuất đã được trường phê
                      duyệt (thỏa mãn các điều kiện OJT và đã hoàn tất thủ tục
                      theo yêu cầu)
                    </Stack>
                  </>
                }
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle={
                  <>
                    Căn cứ dựa trên Danh sách sinh viên được phê duyệt đủ điều
                    kiện đi OJT. Phòng Quan hệ doanh nghiệp sẽ gửi email thông
                    báo cho sinh viên và hướng dẫn cách thức đăng ký OJT. Trong
                    đó:
                    <Stack pl="20px" pt="10px">
                      Đối với các doanh nghiệp do nhà trường cung cấp, sinh viên
                      đăng ký theo lịch được ấn định
                      <Stack pb="10px" />
                      Đối với các doanh nghiệp do sinh viên đề xuất: Sau khi có
                      kết quả xét duyệt, yêu cầu đăng ký của sinh viên sẽ được
                      ghi nhận.
                      <Stack pb="10px" />
                    </Stack>
                    Trong vòng 1 tuần kể từ thời điểm đăng ký, Phòng Quan hệ
                    doanh nghiệp sẽ công bố kết quả đăng ký (danh sách sinh viên
                    chính thức tham gia OJT kèm doanh nghiệp được phân bổ) cũng
                    như giải quyết các yêu cầu điều chỉnh (nếu có).
                  </>
                }
              />
            </Stack>
            <Stack>
              <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
                Lưu ý
              </Typography>
              <Typography
                width={"400px"}
                fontSize={"18px"}
                color="#363534"
                lineHeight={"27px"}
                fontFamily="SVN-Gilroy"
              >
                <Stack pb="20px" />
                Sinh viên phải hoàn thiện hồ sơ và upload CV - Portfolio mới đủ
                điều kiện đăng ký online trên hệ thống.
                <Stack pb="10px" />
                Hệ thống sẽ chỉ mở ra và tiếp nhận đăng ký vào một khung thời
                gian cố định đã được thông báo trước qua email cho sinh viên.
                <Stack pb="10px" />
                Sinh viên chỉ có thể ứng tuyển một doanh nghiệp ở mỗi lần đăng
                ký, sau đó chức năng ứng tuyển sẽ tự động khóa và mở lại sau 24
                giờ.
                <Stack pb="10px" />
                Hệ thống sẽ ghi nhận đăng ký theo thứ tự ưu tiên về thời gian
                đăng ký (đăng ký trước sẽ được ưu tiên hơn) cho đến khi đủ chỉ
                tiêu tiếp nhận của mỗi doanh nghiệp.
                <Stack pb="10px" />
                Các sinh viên không tham gia đăng ký online hoặc vi phạm nội quy
                đăng ký sẽ tuân theo sự sắp xếp của nhà trường.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    case 2:
      return (
        <Stack gap="60px" pb="450px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Bắt đầu OJT
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Tuần đầu tiên của kỳ OJT hoặc thời gian khác do doanh nghiệp thông báo."
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Sinh viên chính thức tham gia OJT"
                />
              </Stack>
              <ContentWithIcon
                sx={{ width: "1050px" }}
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle="Sinh viên bắt đầu kỳ OJT"
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle={
                  <>
                    Sinh viên chủ động liên hệ doanh nghiệp để trình diện và bắt
                    đầu kỳ OJT
                    <Stack pb="10px" />
                    Nhà trường gửi “Biên bản tiếp nhận sinh viên" cho Doanh
                    nghiệp để xác nhận
                  </>
                }
              />
            </Stack>
            <Stack>
              <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
                Lưu ý
              </Typography>
              <Typography
                width={"400px"}
                fontSize={"18px"}
                color="#363534"
                lineHeight={"27px"}
                fontFamily="SVN-Gilroy"
              >
                <Stack pb="20px" />
                Sinh viên và Doanh nghiệp cần có thỏa thuận hợp đồng cụ thể
                (bằng văn bản) về các nội dung OJT: Thời gian làm việc, công
                việc được giao, người phụ trách, chế độ làm việc, lương thù
                lao... Nhà trường không can thiệp vào thỏa thuận này cũng như
                không giải quyết những vấn đề phát sinh liên quan đến thỏa thuận
                này.
                <Stack pb="10px" />
                Trong vòng 4 tuần đầu tiên, nếu sinh viên có nguyện vọng thay
                đổi doanh nghiệp (có lý do hợp lý và chính đáng), nhà trường sẽ
                làm việc với doanh nghiệp để xác nhận thông tin. Sau đó, tùy vào
                điều kiện thực tế, nhà trường sẽ hỗ trợ sinh viên chuyển sang
                doanh nghiệp khác hoặc sinh viên có thể đề xuất doanh nghiệp
                (nhưng phải đảm bảo hồ sơ và tiến độ theo yêu cầu để đảm bảo
                khung thời gian OJT tối thiểu).
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    case 3:
      return (
        <Stack gap="60px" pb="450px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Khảo sát doanh nghiệp và sinh viên
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Tuần thứ 9-10 kể từ ngày đầu tiên của kỳ OJT"
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Sinh viên đang OJT và Doanh nghiệp"
                />
              </Stack>
              <ContentWithIcon
                sx={{ width: "1050px" }}
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle={
                  <>
                    Lấy ý kiến Doanh nghiệp về sinh viên.
                    <Stack pb="10px" />
                    Khảo sát ý kiến sinh viên về quá trình OJT
                  </>
                }
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle={
                  <>
                    Phòng Quan hệ doanh nghiệp gửi form mẫu tiếp nhận feedback
                    từ doanh nghiệp và thu nhận kết quả vào tuần thứ 9.
                    <Stack pb="10px" />
                    Phòng Quan hệ doanh nghiệp gửi yêu cầu khảo sát trên web cho
                    sinh viên vào tuần thứ 10.
                  </>
                }
              />
            </Stack>
            <Stack>
              <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
                Lưu ý
              </Typography>
              <Typography
                width={"400px"}
                fontSize={"18px"}
                color="#363534"
                lineHeight={"27px"}
                fontFamily="SVN-Gilroy"
              >
                <Stack pb="20px" />
                Đây là yêu cầu bắt buộc để sinh viên được ghi nhận kết quả OJT.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    case 4:
      return (
        <Stack gap="60px" pb="500px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Đánh giá cuối kỳ
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Tuần thứ 11-14 kể từ ngày đầu tiên của kỳ OJT"
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Doanh nghiệp"
                />
              </Stack>
              <ContentWithIcon
                sx={{ width: "1050px" }}
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle="Doanh nghiệp đánh giá sinh viên cuối kỳ."
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle="Phòng Quan hệ Doanh nghiệp gửi mẫu Phiếu đánh giá cho Doanh nghiệp và thu nhận kết quả.h"
              />
            </Stack>
            <Stack>
              <Typography fontSize={"32px"} color="#022C59" lineHeight={"46px"}>
                Lưu ý
              </Typography>
              <Typography
                width={"400px"}
                fontSize={"18px"}
                color="#363534"
                lineHeight={"27px"}
                fontFamily="SVN-Gilroy"
              >
                <Stack pb="20px" />
                Đây là yêu cầu bắt buộc để sinh viên được ghi kết quả OJT.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    case 5:
      return (
        <Stack gap="60px" pb="400px">
          <Typography fontSize={"70px"} lineHeight="100px" color="#022C59">
            Công nhận kết quả OJT
          </Typography>
          <Stack direction={"row"} gap="60px">
            <Stack gap="40px">
              <Stack direction="row" justifyContent={"space-between"} pb="70px">
                <ContentWithIcon
                  iconImage="assets/clockIcon.png"
                  title="Thời gian"
                  subtitle="Sau khi kết thúc học Kỳ OJT"
                />
                <ContentWithIcon
                  iconImage="assets/objectIcon.png"
                  title="Đối tượng"
                  subtitle="Sinh viên đã hoàn thành học kỳ OJT"
                />
              </Stack>
              <ContentWithIcon
                iconImage="assets/contentIcon.png"
                title="Nội dung"
                subtitle={
                  <>
                    Sinh viên được công nhận hoàn thành Học kỳ OJT khi thỏa mãn
                    tất cả các điều kiện sau:
                    <Stack pl="20px" pt="10px" width={"1390px"}>
                      Kết quả nhận xét đánh giá của doanh nghiệp phải ĐẠT (điểm
                      tổng hợp trung bình các tiêu chi từ 5 trở lên, tức 50%
                      theo thang điểm 10, đồng thời không có tiêu chỉ nào bị
                      điểm 0).
                      <Stack pb="10px" />
                      <Box display="inline-block">
                        Hoàn thành mẫu phản hồi về doanh nghiệp OJT tại
                        <Link
                          onClick={() => navigate("/issues")}
                          sx={{
                            textDecoration: "none",
                            ":hover": {
                              cursor: "pointer",
                              textDecoration: "none",
                            },
                          }}
                          pl="5px"
                          display="inline-block"
                          color="#FF4601"
                        >
                          Các vấn đề OJT
                        </Link>
                      </Box>
                    </Stack>
                  </>
                }
              />
              <ContentWithIcon
                iconImage="assets/noteIcon.png"
                title="Cách thức thực hiện"
                subtitle={
                  <Stack sx={{ width: "1390px" }}>
                    Phòng Quan hệ doanh nghiệp chuyển danh sách sinh viên hoàn
                    thành Học kỳ OJT cho Phòng Tổ chức và Quản lý đào tạo để cấp
                    chứng chỉ cho sinh viên trong vòng 3 tháng sau khi kết thúc
                    OJT.
                  </Stack>
                }
              />
            </Stack>
          </Stack>
        </Stack>
      );
    default:
      return <></>;
  }
}

// ----------------------------------------------------------------------

function CustomStepIcon(props) {
  const { active, completed, icon: iconNumber } = props;
  const CustomIcon = (props) => {
    const { value, sx: style } = props;
    return (
      <Box
        display={"flex"}
        width="70px"
        height="70px"
        borderRadius={"50%"}
        justifyContent="center"
        alignItems="center"
        // // backgroundColor="#E5EBF2"
        // color="#022C59"
        sx={{ ":hover": { cursor: "pointer" } }}
        {...style}
      >
        <Typography fontSize={"32px"} lineHeight="46px">
          {value}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <CustomIcon
        value={iconNumber}
        sx={{
          backgroundColor: active ? "#FF4601" : "#E5EBF2",
          color: active ? "#F8FBFF" : "#022C59",
          transition: "color 2s linear, background-color 2s linear",
        }}
      />
    </>
  );
}

function ProcessSection() {
  const [currentStep, SetCurrentStep] = useState(0);
  const steps = [
    "TẬP HUẤN",
    "ĐĂNG KÝ",
    "BẮT ĐẦU",
    "KHẢO SÁT",
    "ĐÁNH GIÁ CUỐI KỲ",
    "CÔNG NHẬN KẾT QUẢ",
  ];

  return (
    <>
      <Stack
        pt="80px"
        px="210px"
        justifyContent={"center"}
        alignItems="center"
        width="100%"
      >
        <Stepper
          activeStep={currentStep}
          alternativeLabel
          connector={<Stack />}
          sx={{ gap: "30px" }}
        >
          {steps.map((label, index) => (
            <Step
              sx={{
                "& .css-nk8roh-MuiStepLabel-label.Mui-active": {
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "600",
                  color: "#363534",
                  fontSize: "24px",
                  lineHeight: "31px",
                  width: "170px",
                },
                "& .css-nk8roh-MuiStepLabel-label.Mui-disable": {
                  fontFamily: "SVN-Gilroy",
                  color: "#676565",
                  fontSize: "24px",
                  lineHeight: "31px",
                  width: "170px",
                },
                "& .css-nk8roh-MuiStepLabel-label": {
                  fontFamily: "SVN-Gilroy",
                  color: "#676565",
                  fontSize: "24px",
                  lineHeight: "31px",
                  width: "170px",
                },
              }}
              key={label}
              onClick={() => SetCurrentStep(index)}
            >
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <Stack pt="150px" px="210px">
        <StepContent currentStep={currentStep} />
      </Stack>
    </>
  );
}

export default ProcessSection;
