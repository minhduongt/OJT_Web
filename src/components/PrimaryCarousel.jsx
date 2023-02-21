import { Box, Container, Stack } from "@mui/material";
import { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./css/slick-dot.module.css";
export default function PrimaryCarousel() {
  const [slider, setSlider] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  // const imgList = [...Array(5)].map((_, index) => {
  //   return {
  //     title: "Image",
  //     image: "../assets/slidercenter.png",
  //   };
  // });

  const imgList = [
    {
      title: "sllider 0",
      image: "../assets/slider0.png",
    },
    {
      title: "sllider 1",
      image: "../assets/slider1.png",
    },
    {
      title: "sllider 2",
      image: "../assets/slider2.png",
    },
    {
      title: "sllider 3",
      image: "../assets/slider3.png",
    },
    {
      title: "sllider 4",
      image: "../assets/slider4.png",
    },
  ];
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 100,
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: styles.dots_bar,
    beforeChange: (current, next) => {
      setImgIndex(next);
    },
  };
  return (
    <Box>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}

      <Box pt="30px" pl={"200px"} pr="300px" width="2000px">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {imgList.map((img, idx) => {
            return (
              <Box
                ml="-100px"
                className={
                  idx === imgIndex
                    ? "slide activeSlide"
                    : idx - 1 === imgIndex ||
                      idx + 1 === imgIndex ||
                      (idx === 0 && imgIndex > 0) ||
                      (idx === imgList.length - 1 && imgIndex === 0)
                    ? // idx === imgIndex - 1 ||
                      //   (imgIndex === 0 && idx === imgList.length)
                      //   ? "slideleft"
                      //   : idx === imgIndex + 1 ||
                      //     (idx === 0 && imgIndex === imgList.length)
                      //   ? "slideright"
                      // :
                      "slide"
                    : "slidesouter"
                }
              >
                <img width={"835px"} height="568px" src={img.image} />
              </Box>
            );
          })}
        </Slider>
      </Box>

      {/* 
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
            src={"../assets/slidercenter.png"}
            alignSelf="center"
          />
          <img
            borderRadius="30px"
            h={"835px"}
            w={"568px"}
            objectFit={"cover"}
            src={"../assets/slider1.png"}
            alignSelf="center"
          />
        </Stack>
                      </Slider>*/}
    </Box>
  );
}
