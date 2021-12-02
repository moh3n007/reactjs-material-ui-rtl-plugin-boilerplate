import { Direction } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { palettes } from "./palettes";

const defaultContext: any = {
  direction: "ltr",
  setDirection: (direction: Direction) => {},
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
    <ThemeContext.Provider value={{ direction, setDirection }}>
      <MUIThemeProvider theme={theme}>
        {/* <StylesProvider jss={jss as Jss} generateClassName={generateClassName}> */}
        {props.children}
        {/* </StylesProvider> */}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
