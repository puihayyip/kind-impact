"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="light"
        position="fixed"
        elevation={0}
        style={{ borderBottom: "2px solid #a6a6a6" }}
        sx={{ bgcolor: "white" }}
      >
        <Toolbar style={{ "justify-content": "space-between" }}>
          <div>
            <Link href="/">
              <Image
                src="/images/KindImpact-logo-slogan.png"
                alt="KindImpact-logo"
                width={450}
                height={450}
                style={{ position: "fixed" }}
              />
            </Link>
            <h1>spacing</h1>
            <h1>spacing</h1>
            <h1>spacing</h1>
            <h1>spacing</h1>
            <h1>spacing</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end">
              <Button sx={{ fontSize: 40 }} onClick={handleClick}>
                Team 14
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <AccountCircleIcon sx={{ fontSize: 80 }} color="primary" />
            </div>
            <div className="flex gap-x-3">
              <Link href="/about-us">
                <h1 className="font-bold text-2xl ml-3 text-blue-700">
                  About Us
                </h1>
              </Link>
              <Link href="/contact-us">
                <h1 className="font-bold text-2xl ml-3  text-blue-700">
                  Contact Us
                </h1>
              </Link>
              <Link href="/careers">
                <h1 className="mr-6 font-bold text-2xl ml-3  text-blue-700">
                  Careers
                </h1>
              </Link>
              <Link href="https://www.facebook.com/kind-impact/">
                <Image
                  src="/icons/facebook.png"
                  alt="facebook-icon"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.instagram.com/kind-impact/">
                <Image
                  src="/icons/instagram.png"
                  alt="instagram-icon"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.x.com/kind-impact/">
                <Image
                  src="/icons/twitter.png"
                  alt="twitter-icon"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
