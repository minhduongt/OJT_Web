import { Link, Stack, Typography, Divider, Popover, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const HoverText = styled(Typography)(({ theme }) => ({
  fontFamily: "SVN-Gilroy",
  fontSize: "24px",
  fontWeight: "500",
  color: "#363534",
  "&:hover": {
    color: "#FF4601",
    opacity: 0.5,
    cursor: "pointer",
  },
}));

const LinksHover = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleClose2 = (event) => {
    setAnchorE2(null);
  };
  const handleClose3 = (event) => {
    setAnchorE3(null);
  };

  useEffect(() => {
    console.log("location", location);
  }, [location]);
  return (
    <>
      <Stack
        sx={{
          width: "447px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        direction={"row"}
      >
        <Link href="#" underline="none">
          <HoverText
            onMouseOver={handleClick}
            sx={{
              fontFamily: "SVN-Gilroy",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "25px",
              color:
                open ||
                location.pathname.includes("/process") ||
                location.pathname.includes("/about")
                  ? "#FF4601"
                  : "",
            }}
          >
            Gi???i thi???u
          </HoverText>
          <Menu
            sx={{ display: "relative", top: "40px" }}
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => {
                handleClose();
                navigate("/about");
              }}
            >
              T???ng quan OJT
            </MenuItem>
            <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => {
                handleClose();
                navigate("/process");
              }}
            >
              Quy tr??nh OJT
            </MenuItem>
          </Menu>
        </Link>
        <Link href="#" underline="none">
          <HoverText
            onMouseOver={handleClick2}
            sx={{
              fontFamily: "SVN-Gilroy",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "25px",
              color:
                open2 ||
                location.pathname.includes("/jobs") ||
                location.pathname.includes("/companies")
                  ? "#FF4601"
                  : "",
            }}
          >
            Vi???c l??m
          </HoverText>
          <Menu
            sx={{ display: "relative", top: "40px" }}
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open2}
            onClose={handleClose2}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => navigate("/companies")}
            >
              C??ng ty
            </MenuItem>
            <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => navigate("/jobs")}
            >
              C??ng vi???c
            </MenuItem>
          </Menu>
        </Link>
        <Link href="#" underline="none">
          <HoverText
            onMouseOver={handleClick3}
            sx={{
              fontFamily: "SVN-Gilroy",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "25px",
              color:
                open3 ||
                location.pathname.includes("/notifications") ||
                location.pathname.includes("/issues")
                  ? "#FF4601"
                  : "",
            }}
          >
            Qu???n l?? OJT
          </HoverText>
          <Menu
            sx={{ display: "relative", top: "40px" }}
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE3}
            open={open3}
            onClose={handleClose3}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => navigate("/notifications")}
            >
              Th??ng b??o OJT
            </MenuItem>
            <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
            <MenuItem
              sx={{
                my: "-8px",
                height: "60px",
                width: "200px",
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
                ":hover": {
                  backgroundColor: "#E5EBF2",
                  color: "#FF4601",
                  fontWeight: "500",
                },
              }}
              onClick={() => navigate("/issues")}
            >
              C??c v???n ????? OJT
            </MenuItem>
          </Menu>
        </Link>
      </Stack>
    </>
  );
};

const MainNav = () => {
  const navigate = useNavigate();
  const [anchorRing, setAnchorRing] = useState(null);
  const [anchorLogo, setAnchorLogo] = useState(null);
  const openRing = Boolean(anchorRing);
  const openLogo = Boolean(anchorLogo);

  const handleClickRing = (event) => {
    setAnchorRing(event.currentTarget);
  };
  const handleClickLogo = (event) => {
    setAnchorLogo(event.currentTarget);
  };
  const handleCloseRing = (event) => {
    setAnchorRing(null);
  };
  const handleCloseLogo = (event) => {
    setAnchorLogo(null);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        paddingX: "100px",
        justifyContent: "space-between",
        minHeight: "120px",
        alignItems: "center",
        // border: "solid",
        // borderColor: "#000000",
        // borderWidth: "1px",
        // boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Stack
        sx={{
          width: "178px",
          fontFamily: "SVN-Gilroy",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
          },
        }}
        direction={"row"}
        onClick={() => navigate("/")}
      >
        <img
          src={"/assets/Logo.png"}
          alt={"Logo"}
          loading="lazy"
          width={"70px"}
          height="70px"
        />
        <Typography
          fontWeight={"400"}
          fontSize="32px"
          lineHeight={"40px"}
          color="#FF4601"
          sx={{ paddingLeft: "20px" }}
        >
          OJT
        </Typography>
      </Stack>
      <Stack direction="row">
        <LinksHover />
        <Stack
          spacing={1.5}
          direction={"row"}
          sx={{
            paddingLeft: "50px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "114px",
            minHeight: "60px",
          }}
        >
          <Box>
            <Box
              onClick={handleClickRing}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={"/assets/ringbellfixed.png"}
                alt={"Logo"}
                loading="lazy"
                width={"44px"}
                height="44px"
              />
            </Box>
            <Menu
              sx={{ display: "relative", top: "40px" }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorRing}
              open={openRing}
              onClose={handleCloseRing}
              TransitionComponent={Fade}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseRing}
              >
                C??ng ty TNHH Schaeffler c?? 3 v??? tr?? ???ng tuy???n m???i
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseRing}
              >
                Th??ng b??o h?????ng d???n ????ng k?? OJT tr??n website
              </MenuItem>
            </Menu>
          </Box>

          <Box>
            <Box
              onClick={handleClickLogo}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={"/assets/currentUser.png"}
                alt={"Logo"}
                loading="lazy"
                width={"60px"}
                height="60px"
              />
            </Box>

            <Menu
              sx={{ display: "relative", top: "50px" }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorLogo}
              open={openLogo}
              onClose={handleCloseLogo}
              TransitionComponent={Fade}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseLogo}
              >
                H??? s?? ???ng vi??n
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseLogo}
              >
                Qu?? tr??nh ???ng tuy???n
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseLogo}
              >
                H??? tr???
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                  ":hover": {
                    backgroundColor: "#E5EBF2",
                    color: "#FF4601",
                  },
                }}
                onClick={handleCloseLogo}
              >
                ????ng xu???t
              </MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainNav;
