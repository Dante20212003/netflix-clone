import styled from "styled-components";

interface Props {
  height?: number;
  borderBottom?: boolean;
  center?: boolean;
  padding?: number[];
}
export const Section = styled.section<Props>`
  background-color: #000;
  color: #fff;
  ${(props) =>
    props.borderBottom &&
    "border-bottom: 0.8rem solid #222; ;"} /*  height: 45rem;
  @media (min-width: 950px) {
    height: ${(props) => props.height}rem;
  } */
  padding: ${(props) => props.padding?.[0]}rem ${(props) =>
    props.padding?.[1]}rem;

  @media (min-width: 550px) {
    padding: 7rem 4.5rem;
  }
`;

Section.defaultProps = {
  padding: [0, 0],
};
