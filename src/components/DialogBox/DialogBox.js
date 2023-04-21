import React from "react";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import CancelIcon from "@mui/icons-material/Cancel";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CancelIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const DialogBox = ({ open, setOpen, children, title }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      {children}
    </BootstrapDialog>
  );
};

export default DialogBox;
