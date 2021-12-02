import { Box, styled } from "@mui/system";
import { FC } from "react";
import PaletteButton from "./PaletteChanger/PaletteButton";
import palette1 from "../../public/palettes/1.png";
import palette2 from "../../public/palettes/2.png";
import { useTheme } from "../../context/ThemeProvider";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PaletteChanger: FC = () => {
  const { choosePalette } = useTheme();
  return (
    <Wrapper>
      <PaletteButton image={palette1} onClick={() => choosePalette(0)} />
      <PaletteButton image={palette2} onClick={() => choosePalette(1)} />
    </Wrapper>
  );
};

export default PaletteChanger;
