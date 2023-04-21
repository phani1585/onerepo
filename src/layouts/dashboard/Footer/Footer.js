import { Box } from "@mui/material";
import React from "react";
import ChangiAirport from "../../../components/LogoComponents/ChangiAirPortLogo";

const Footer = () => {
  return (
    <Box display="flex" p={2} sx={{ borderTop: "2px solid lightgray" }}>
      <Box flex={1}></Box>
      <Box width="95px" height="55px">
        <ChangiAirport />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        paddingLeft="10rem"
      >
        <Box>
          <span style={{ color: "inherit", marginRight: "1rem" }}>
            Privacy Policy
          </span>
          {"|"}
          <span style={{ color: "inherit", marginLeft: "1rem" }}>
            Terms & Conditions
          </span>
        </Box>
        <Box>2023 ChangiAirport Group. All Rights Recivied.</Box>
      </Box>
    </Box>
  );
};

export default Footer;
