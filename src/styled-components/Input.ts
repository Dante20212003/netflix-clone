import { HomePage } from "./../pages/Home/HomePage";
import styled from "styled-components";

interface Props {
  bgColor?: string;
  color?: string;
  homePage?: boolean;
}
export const InputStyled = styled.input<Props>`
  background-color: ${(props) => `#${props.bgColor}`};

  color: ${(props) => `#${props.color}`};
  ${(props) => props.bgColor == "fff" && "color: #000;"};

  ${(props) =>
    props.homePage
      ? `
    border-radius: unset;
  `
      : ""}
`;

InputStyled.defaultProps = {
  bgColor: "333",
  color: "f5f5f5",
};
