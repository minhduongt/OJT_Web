import { Link, Stack, Typography, Divider, Popover } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
const MainNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [showDropdown, setShowDropdown] = useState(false);
  const HoverText = styled(Typography)(({ theme }) => ({
    "&:hover": {
      color: "#FF4601",
      cursor: "pointer",
    },
  }));

  return (
    <Stack
      direction={"row"}
      sx={{
        paddingX: "100px",
        justifyContent: "space-between",
        minHeight: "120px",
        alignItems: "center",
        border: "solid",
        borderColor: "#000000",
        borderWidth: "1px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Stack
        sx={{
          width: "178px",
          fontFamily: "SVN-Gilroy",
          alignItems: "center",
        }}
        direction={"row"}
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
        <Stack
          sx={{
            width: "447px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          direction={"row"}
        >
          <HoverText
            onMouseEnter={handleOpenMenu}
            onMouseLeave={handleCloseMenu}
            sx={{
              fontFamily: "SVN-Gilroy",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "25px",
            }}
          >
            Giới thiệu
          </HoverText>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography
              sx={{
                p: 1.5,
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
              }}
            >
              Tổng quan
            </Typography>
            <Divider sx={{ border: "1px solid rgba(255, 70, 1, 0.3)" }} />
            <Typography
              sx={{
                p: 1.5,
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
              }}
            >
              Quy trình OJT
            </Typography>
          </Popover>
          {/* <Link href="#">
          <HoverText
            onClick={handleClick}
            sx={{
              fontFamily: "SVN-Gilroy",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "25px",
            }}
          >
            Giới thiệu
          </HoverText>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              sx={{
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
              }}
              onClick={handleClose}
            >
              Tổng quan
            </MenuItem>
            <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
            <MenuItem
              sx={{
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
                color: "#363534",
              }}
              onClick={handleClose}
            >
              Quy trình OJT
            </MenuItem>
          </Menu>
          </Link> */}

          {/* <Link href="#" underline="hover">
            <HoverText
              onClick={handleClick}
              sx={{
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "25px",
              }}
            >
              Việc làm
            </HoverText>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                }}
                onClick={handleClose}
              >
                Công ty
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                }}
                onClick={handleClose}
              >
                Công việc
              </MenuItem>
            </Menu>
          </Link> */}
          {/* <Link href="#" underline="hover">
            <HoverText
              onClick={handleClick}
              sx={{
                fontFamily: "SVN-Gilroy",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "25px",
              }}
            >
              Quản lý OJT
            </HoverText>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                }}
                onClick={handleClose}
              >
                Thông báo OJT
              </MenuItem>
              <Divider sx={{ border: "2px solid rgba(255, 70, 1, 0.3)" }} />
              <MenuItem
                sx={{
                  fontFamily: "SVN-Gilroy",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#363534",
                }}
                onClick={handleClose}
              >
                Các vấn đề OJT
              </MenuItem>
            </Menu>
          </Link> */}
        </Stack>
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
          <img
            src={"/assets/ringbellfixed.png"}
            alt={"Logo"}
            loading="lazy"
            width={"44px"}
            height="44px"
          />
          <img
            src={"/assets/currentUser.png"}
            alt={"Logo"}
            loading="lazy"
            width={"60px"}
            height="60px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainNav;
