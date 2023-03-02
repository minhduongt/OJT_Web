// material
import { Box, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

function AboutSection() {
  return (
    <>
      <Stack
        pt="80px"
        px="210px"
        justifyContent={"center"}
        alignItems="center"
        width="100%"
        gap={10}
      >
        <Stack height={"220px"} direction={"row"} alignContent="center">
          <img width="220px" height="220px" src="assets/bigLogo.png" />
          <Stack justifyContent={"center"} alignItems="center">
            <Typography
              sx={{ textShadow: "2px 5px 10px #022C594D" }}
              fontSize={"94px"}
              lineHeight="136px"
              color="#FF4601"
            >
              OJT
            </Typography>
            <Typography
              sx={{ textShadow: "2px 5px 10px #022C594D" }}
              fontFamily={"SVN-Gilroy"}
              fontWeight="600"
              fontSize="28px"
            >
              On the Job Training
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"space-between"} direction="row">
          <Typography
            width="400px"
            fontSize="32px"
            color="#022C59"
            lineHeight={"46px"}
          >
            Tên gọi
          </Typography>
          <Stack width={"1060px"} gap={"10px"}>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
            >
              <Typography
                display={"inline-block"}
                fontFamily={"SVN-Gilroy"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
              >
                TÊN TIẾNG VIỆT:
              </Typography>
              Học kỳ tại doanh nghiệp
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
            >
              <Typography
                fontFamily={"SVN-Gilroy"}
                display={"inline-block"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
              >
                TÊN TIẾNG ANH:
              </Typography>
              On the Job Training
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"space-between"} direction="row">
          <Typography
            width="400px"
            fontSize="32px"
            color="#022C59"
            lineHeight={"46px"}
          >
            Giới thiệu chương trình OJT
          </Typography>
          <Stack width="1060px" gap={"10px"}>
            <Typography
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              pb="10px"
              lineHeight={"36px"}
            >
              Là một học kỳ chính khóa (Học kỳ thứ 6) mang tính bắt buộc, có
              đánh giá kết quả hoàn thành dành cho tất cả các sinh viên.
            </Typography>

            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              <Typography
                fontFamily={"SVN-Gilroy"}
                display={"inline-block"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
                lineHeight={"36px"}
              >
                MỤC ĐÍCH:
              </Typography>
              Trang bị kiến thức và kỹ năng nghề nghiệp thực tế cho sinh viên
              gắn với chuyên môn được đào tạo. Sau chương trình, sinh viên sẽ
              hiểu hơn về đặc điểm ngành học của mình, hoàn thiện hơn về kỹ năng
              và có những sự chuẩn bị tốt hơn cho định hướng nghề nghiệp sau
              này.
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              <Typography
                fontFamily={"SVN-Gilroy"}
                display={"inline-block"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
                lineHeight={"36px"}
              >
                HÌNH THỨC TỔ CHỨC:
              </Typography>
              Sinh viên trải nghiệm công việc thực tế tại các doanh nghiệp, được
              đào tạo, phân công nhiệm vụ tại các vị trí công việc gắn với ngành
              học chuyên môn của sinh viên, đồng thời sinh viên được thực hành,
              trao dồi các kỹ năng nghề nghiệp, ý thức kỉ luật lao động và văn
              hóa doanh nghiệp.
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              <Typography
                fontFamily={"SVN-Gilroy"}
                display={"inline-block"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
                lineHeight={"36px"}
              >
                THỜI ĐIỂM TỔ CHỨC:
              </Typography>
              Một năm có 3 đợt, tương ứng với các thời điểm: Tháng 1 (Spring),
              Tháng 5 (Summer) và Tháng 9 (Fall).
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              <Typography
                fontFamily={"SVN-Gilroy"}
                display={"inline-block"}
                fontWeight="600"
                width={"auto"}
                pr="5px"
                lineHeight={"36px"}
              >
                THỜI GIAN THỰC HIỆN:
              </Typography>
              Mỗi đợt diễn ra trong 14 tuần. Ngoài ra, tùy vào tình hình thực tế
              và yêu cầu của doanh nghiệp, thời gian chương trình có thể thay
              đổi nhưng không ít hơn 12 tuần.
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"space-between"} direction="row">
          <Typography
            width="400px"
            fontSize="32px"
            color="#022C59"
            lineHeight={"46px"}
          >
            Điều kiện tham gia OJT
          </Typography>
          <Stack width={"1060px"} gap={"10px"}>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              Hoàn thành số chứng chỉ tối thiểu theo yêu cầu.
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              Hoàn thành nghĩa vụ học phí.
            </Typography>
            <Typography
              display={"inline-block"}
              direction={"row"}
              fontSize="18px"
              fontFamily={"SVN-Gilroy"}
              fontWeight="400"
              lineHeight={"36px"}
            >
              Có tham dự Orientation và tuân thủ quy định về OJT.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default AboutSection;
