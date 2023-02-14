import { Box, Container, Stack } from "@mui/material";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PrimaryCarousel() {
  const slider = useRef(null);
  const settings = {
    lazyLoad: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    ltr: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box
        padding={{ base: "0", lg: "0rem 5rem" }}
        sx={{
          "& .slick-current .css-6qnmc5 .img": {
            height: "25rem",
            w: "16rem",
          },
          "& .slick-slider .css-6qnmc5": {
            display: "flex !important",
          },
          "& .slick-prev::before, .slick-next::before": {
            fontFamily: "unset",
            fontSize: "44px",
            color: "rgba(37, 133, 90, 1)",
          },
          "& .slick-prev, .slick-next": {
            display: { base: "none !important", lg: "initial !important" },
          },
        }}
      >
        <Slider {...settings} ref={slider}>
          <Stack
            direction="row"
            flexDirection={"row"}
            justifyContent="center"
            height="1000px"
            alignContent="center"
          >
            <img
              borderRadius="30px"
              h={"835px"}
              w={"568px"}
              objectFit={"cover"}
              src={"src/assets/slidercenter.png"}
              alignSelf="center"
            />
            <img
              borderRadius="30px"
              h={"835px"}
              w={"568px"}
              objectFit={"cover"}
              src={"src/assets/slider1.png"}
              alignSelf="center"
            />
          </Stack>
        </Slider>
      </Box>
    </div>
  );
}
