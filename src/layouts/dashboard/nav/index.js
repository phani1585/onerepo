import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import TrexAdminLogoComponent from "../../../components/LogoComponents/TrexAdminLogoComponent";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section";
import navConfig from "./config";

const NAV_WIDTH = 256;

const Nav = ({ openNav, onCloseNav }) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <TrexAdminLogoComponent />
      </Box>
      <NavSection data={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box boxShadow={1}
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "#fff",
              // borderRight: "2px solid lightgray",
              // borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

export default Nav;
