import { Direction } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { palettes } from "./palettes";
import { StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

const defaultContext: any = {
  direction: "ltr",
  setDirection: (direction: Direction) => {},
  theme: {},
};

const ThemeContext = React.createContext(defaultContext);
export default ThemeContext;

export const ThemeProvider: React.FunctionComponent = (props: any) => {
  const [direction, setDirection] = useState<Direction>(
    defaultContext.direction
  );

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  const theme = createTheme({
    direction,
    palette: palettes[0],
  });

  return (
    <ThemeContext.Provider value={{ direction, setDirection, theme }}>
      <MUIThemeProvider theme={theme}>
        <StyleSheetManager
          stylisPlugins={direction === "rtl" ? [stylisRTLPlugin] : []}
        >
          {/* <StylesProvider jss={jss as Jss} generateClassName={generateClassName}> */}
          {props.children}
        </StyleSheetManager>
        {/* </StylesProvider> */}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
