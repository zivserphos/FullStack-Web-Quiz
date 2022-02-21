import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const LocationMenu = function ({
  setJobTitle,
  jobTitle,
}: {
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  jobTitle: string;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (updatedjobTitle: string) => {
    if (typeof updatedjobTitle === "string") setJobTitle(updatedjobTitle || "");
    setAnchorEl(null);
  };

  return (
    <div style={{ alignItems: "center" }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        variant="contained"
        color="success"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ textTransform: "none", fontSize: "1.1rem" }}
      >
        {jobTitle || "Choose Job"}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => handleClose("Fullstack developer")}>
          Fullstack Developer
        </MenuItem>
        <MenuItem onClick={() => handleClose("Data Analyst")}>
          Data Analyst
        </MenuItem>
        <MenuItem onClick={() => handleClose("Devops Engineer")}>
          Devops Engineer
        </MenuItem>
        <MenuItem onClick={() => handleClose("Backend Developer")}>
          Backend Developer
        </MenuItem>
        <MenuItem onClick={() => handleClose("Frontend Developer")}>
          Frontend Developer
        </MenuItem>
        <MenuItem onClick={() => handleClose("Sales")}>Sales</MenuItem>
      </Menu>
    </div>
  );
};

export default LocationMenu;
