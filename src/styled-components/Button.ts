import styled from "styled-components";

interface Props {
  padding?: number[];
  login?: boolean;
}

export const Button = styled.button<Props>`
  margin-top: 5rem;
  position: relative;
  width: 100%;
  border: unset;
  border-radius: 0.3rem;
  background-color: #e50914;
  color: #fff;
  padding: ${(props) => props.padding?.[0]}rem
    ${(props) => props.padding?.[0]}rem;
  font-size: 2.44rem;
  cursor: pointer;
  font-weight: 100;

  &:disabled span {
    ${(props) => props.login && "visibility: hidden;"}
  }
  &:disabled {
    cursor: default;
  }

  &:disabled::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    /* background-color: rgb(255, 255, 255, 0.1); */
    background-color: ${(props) =>
      props.login ? "rgba(0, 0, 0, 0.9)" : "#fff"};
    /*   background-color: #fff; */
    opacity: 0.4;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &:disabled::after {
    content: "";
    background-image: url("/spinner.png");
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    position: absolute;

    width: ${(props) => (props.login ? "2rem" : "4rem")};
    height: ${(props) => (props.login ? "2rem" : "4rem")};
    animation: nfLoader-spin 1.1s linear infinite, 1 !important;
    -webkit-animation: nfLoader-spin 1.1s linear infinite, 1 !important;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  @keyframes nfLoader-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes nfLoader-spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;

Button.defaultProps = {
  padding: [2, 1],
};
