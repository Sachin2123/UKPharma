// ReusableModal.jsx
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReusableModal = ({
  open,
  onClose,
  title = "",
  children,
  width = { xs: "90%", sm: "70%", md: "500px" },
  padding = 5,
  showCloseIcon = true,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "16px",
          boxShadow: 24,
          width: width,
          p: padding,
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto", // scroll if content is long
        }}
      >
        {showCloseIcon && (
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "grey.700",
            }}
          >
            <CloseIcon />
          </IconButton>
        )}

        {title && (
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            {title}
          </Typography>
        )}

        <Box id="modal-description">{children}</Box>
      </Box>
    </Modal>
  );
};

export default ReusableModal;
