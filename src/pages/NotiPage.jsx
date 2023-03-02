import { Container, Stack, Typography } from "@mui/material";
import AboutSection from "@/components/AboutSection";

const NotiPage = () => {
  const notiList = [
    {
      image: "/assets/notiImage.png",
      title: "Thông báo hướng dẫn đăng ký OJT Fall 2022",
      date: "05/07/2022",
    },
    {
      image: "/assets/notiImage.png",
      title: "OJT Fall 2022_Lịch triển khai dự kiến",
      date: "05/07/2022",
    },
    {
      image: "/assets/notiImage.png",
      title: "Thông báo danh sách sinh viên chính thức đi OJT Summer 2022",
      date: "05/04/2022",
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
          THÔNG BÁO OJT
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
      <Stack
        gap={"40px"}
        justifyContent="center"
        mx="320px"
        pt="105px"
        pb="150px"
      >
        {notiList.map((noti) => {
          return (
            <Stack
              key={noti.title}
              width="1278px"
              height="210px"
              direction="row"
              sx={{
                backgroundColor: "#E5EBF2",
                boxShadow: "0px 0px 20px 1px #022C5933",
                ":hover": {
                  cursor: "pointer",
                  opacity: "0.8",
                },
              }}
            >
              <Stack
                width={"40%"}
                sx={{
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width="406px" he src={noti.image} />
              </Stack>

              <Stack width="60%" justifyContent={"center"} px="40px">
                <Typography color="#022C59" fontSize="32px" lineHeight={"41px"}>
                  {noti.title}
                </Typography>
                <Typography
                  color="#676565"
                  fontFamily={"SVN-Gilroy"}
                  fontStyle="italic"
                  fontSize="18px"
                  lineHeight={"23.4px"}
                >
                  {"Ngày đăng: " + noti.date}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

export default NotiPage;
