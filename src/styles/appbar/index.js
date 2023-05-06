import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";

import "@fontsource/montez";

import { Colors, DRAWER_WIDTH } from "../theme";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
}));

// Header
export const AppbarHeader = styled(Typography)(() => ({
  fontSize: "4em",
  fontFamily: "'Montez', 'cursive'",
  color: Colors.primary,
  flexGrow: 1,
  letterSpacing: ".2rem",
}));

// List
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 2,
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
  zIndex: 2,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DRAWER_WIDTH,
  zIndex: 1999,
}));
