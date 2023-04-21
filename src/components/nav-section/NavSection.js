import { NavLink } from "react-router-dom";
// @mui
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//
import { Fragment, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// ----------------------------------------------------------------------

const NavSection = ({ data = [], ...other }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <Box {...other}>
      <List disablePadding>
        {data.map((item, index) => (
          <Fragment key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemIcon sx={{ minWidth: "2rem" }}>
                {item.icon()}
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {item.nestedItems &&
                (openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
            {item.nestedItems && (
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List sx={{ px: "0.5rem" }} component="div" disablePadding>
                  {item.nestedItems.map((nestedItem, nestedIndex) => {
                    return (
                      <NavLink to={nestedItem.to} key={nestedIndex}>
                        <ListItemButton sx={{ pl: "2.5rem", py: "0" }}>
                          <ListItemText primary={nestedItem.title} />
                        </ListItemButton>
                      </NavLink>
                    );
                  })}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
