import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

const Layout: FC = () => {
  const theme = useTheme();
  return <Box color={theme.palette.primary.main}>layout</Box>;
};

export default Layout;
