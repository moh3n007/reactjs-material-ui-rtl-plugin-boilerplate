import { Direction, Theme } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { palettes } from "./palettes";
import { StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

interface IThemeContext {
  direction: Direction;
  setDirection: (direction: Direction) => void;
  theme?: Theme;
  choosePalette: (paletteNum: number) => void;
}

const defaultContext: IThemeContext = {
  direction: "ltr",
  setDirection: (direction: Direction) => {},
  choosePalette: (paletteNum: number) => {},
};

const ThemeContext = React.createContext(defaultContext);
export default ThemeContext;

export const ThemeProvider: React.FunctionComponent = (props: any) => {
  const [direction, setDirection] = useState<Direction>(
    defaultContext.direction
  );
  const [paletteNumber, setPaletteNumber] = useState(0);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  const choosePalette = (paletteNum: number) => setPaletteNumber(paletteNum);

  const theme = createTheme({
    direction,
    palette: palettes[paletteNumber],
  });

  return (
    <ThemeContext.Provider
      value={{ direction, setDirection, theme, choosePalette }}
    >
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
