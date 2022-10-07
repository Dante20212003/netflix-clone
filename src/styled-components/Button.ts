import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5rem;
  position: relative;
  width: 100%;
  border: unset;
  border-radius: 0.3rem;
  background-color: #fff;
  background-color: #e50914;
  color: #fff;
  padding: 2rem 1rem;
  font-size: 2.44rem;
  cursor: pointer;
  font-weight: 100;

  &:disabled {
    cursor: default;
  }

  &:disabled::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.4;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &:disabled::after {
    content: "";
    background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    position: absolute;
    width: 4rem;
    height: 4rem;
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
