import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Typography } from "@mui/material";

const NewsView = ({ handleClose, open, news }) => {
  const handleOnClose = () => {
    handleClose();
  };
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogActions>
        <CloseRoundedIcon
          sx={{ mt: "10px", mr: "10px" }}
          onClick={() => handleOnClose()}
        />
      </DialogActions>
      <DialogContent>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#676767",
            marginBottom: "20px",
          }}
        >
          {news.title}
        </Typography>
        <img src={news.image} alt="article_img" width="100%" />
        <Typography sx={{
            fontSize: "17px",
            color: "#676767",
            marginBottom: "20px",
          }}>{news.description}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default NewsView;
