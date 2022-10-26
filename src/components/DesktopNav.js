import React from "react";

// MUI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

// Icons
import { GiLotus } from "react-icons/gi";

// Router
import { useNavigate } from "react-router-dom";

function DesktopNav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  // Nav links
  const pages = [
    {
      name: "Meditate",
      handleClick: () => navigate("/"),
    },
    {
      name: "Favorites",
      handleClick: () => navigate("/favorites"),
    },
    {
      name: "Info",
      handleClick: () => navigate("/"),
    },
  ];
  // User Menu Links
  const settings = [
    {
      name: "Profile",
      handleClick: () => navigate("/profile"),
    },
    {
      name: "Logout",
      handleClick: () => {},
    },
  ];

  // User Menu handlers
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "transparent" }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <GiLotus size="30px" style={{ marginRight: ".5rem" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* Nav Links mapped */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, ml: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  my: 2,
                  mr: 2,
                  color: "white",
                  fontWeight: 700,
                  display: "block",
                }}
                onClick={page.handleClick}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* Avatar icon */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              disableScrollLock={true}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* User menu mapped */}
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={() => {
                    handleCloseUserMenu();
                    setting.handleClick();
                  }}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DesktopNav;