import { Box } from "@mui/system";
import React, { FC } from "react";
import { useTheme } from "../context/ThemeProvider";

const Layout: FC = () => {
  const { theme, setDirection } = useTheme();
  console.log(theme.direction);

  return (
    <Box mr="24px" color={theme.palette.secondary.main}>
      <button onClick={() => setDirection("rtl")}>rtl</button>
      <button onClick={() => setDirection("ltr")}>ltr</button>
      layout
    </Box>
  );
};

export default Layout;
