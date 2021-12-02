import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { FC } from "react";
import { useTheme } from "../context/ThemeProvider";
import PaletteChanger from "./Layout/PaletteChanger";

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 500px;
`;

const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* @noflip */
  direction: ltr;
`;

const DirectionButton = styled(Button)``;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 18px;
`;

const Layout: FC = () => {
  const { setDirection, direction } = useTheme();

  return (
    <Wrapper>
      <Container>
        <ButtonsWrapper>
          <DirectionButton
            variant="contained"
            color="secondary"
            onClick={() => setDirection("ltr")}
          >
            LTR
          </DirectionButton>
          <DirectionButton
            variant="contained"
            onClick={() => setDirection("rtl")}
          >
            RTL
          </DirectionButton>
        </ButtonsWrapper>
        <ButtonsWrapper mt="18px">
          <PaletteChanger />
        </ButtonsWrapper>
        <ContentWrapper>
          <Typography>
            {direction === "rtl" ? "Right to Left" : "Left to Right"}
          </Typography>
          <Box mt="12px">
            <Typography>{`----------->`}</Typography>
          </Box>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Layout;
