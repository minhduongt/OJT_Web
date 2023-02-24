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
      console.log("current slide", next);
    },
  };

  function GetClassForSlides(idx, imgIndex) {
    // case 0
    if (imgIndex === 0) {
      if (idx === 0) {
        return "activeSlide";
      }
      if (idx === 1) {
        return "slide";
      }
      if (idx === 2) {
        return "slideouter";
      }
      if (idx === 3) {
        return "slideouter";
      }
      if (idx === 4) {
        return "slide";
      }
    }
    // case 1
    if (imgIndex === 1) {
      if (idx === 0) {
        return "slide";
      }
      if (idx === 1) {
        return "activeSlide";
      }
      if (idx === 2) {
        return "slide";
      }
      if (idx === 3) {
        return "slideouter";
      }
      if (idx === 4) {
        return "slideouter";
      }
    }
    // case 2
    if (imgIndex === 2) {
      if (idx === 0) {
        return "slideouter";
      }
      if (idx === 1) {
        return "slide";
      }
      if (idx === 2) {
        return "activeSlide";
      }
      if (idx === 3) {
        return "slide";
      }
      if (idx === 4) {
        return "slideouter";
      }
    }
    // case 3
    if (imgIndex === 3) {
      if (idx === 0) {
        return "slideouter";
      }
      if (idx === 1) {
        return "slideouter";
      }
      if (idx === 2) {
        return "slide";
      }
      if (idx === 3) {
        return "activeSlide";
      }
      if (idx === 4) {
        return "slide";
      }
    }
    // case 4
    if (imgIndex === 4) {
      if (idx === 0) {
        return "slide";
      }
      if (idx === 1) {
        return "slideouter";
      }
      if (idx === 2) {
        return "slideouter";
      }
      if (idx === 3) {
        return "slide";
      }
      if (idx === 4) {
        return "activeSlide";
      }
    }
  }
  return (
    <Box overflow={"hidden"}>
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

      <Box pt="30px" pl={"180px"} pr="140px" width="1800px" overflow={"hidden"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {imgList.map((img, idx) => {
            return (
              <Box
                ml="-80px"
                className={
                  GetClassForSlides(idx, imgIndex)
                  // idx === imgIndex
                  //   ? "activeSlide"
                  //   : idx - 1 === imgIndex ||
                  //     idx + 1 === imgIndex ||
                  //     (idx === 0 && imgIndex > 0) ||
                  //     (idx === imgList.length - 1 && imgIndex === 0)
                  //   ?
                  // idx === imgIndex - 1 ||
                  //   (imgIndex === 0 && idx === imgList.length)
                  //   ? "slideleft"
                  //   : idx === imgIndex + 1 ||
                  //     (idx === 0 && imgIndex === imgList.length)
                  //   ? "slideright"
                  // :
                  //   "slide"
                  // : "slidesouter"
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
