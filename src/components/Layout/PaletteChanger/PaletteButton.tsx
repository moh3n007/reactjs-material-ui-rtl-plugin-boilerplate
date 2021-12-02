import { Button, ButtonProps } from "@mui/material";
import { styled as MUIStyled } from "@mui/system";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = MUIStyled(Button)`
  display: flex;
  height: 36px;
  background-color: unset;
  padding: 0
`;
const Image = styled.img`
  height: 36px;
  object-fit: cover;
`;

interface IPaletteButton {
  image: string;
}

const PaletteButton: FC<IPaletteButton & ButtonProps> = ({
  image,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Image src={image} />
    </Wrapper>
  );
};

export default PaletteButton;
