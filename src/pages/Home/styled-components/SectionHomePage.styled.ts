import styled from "styled-components";

interface Props {
  reverse_item?: boolean;
  padding?: number[];
}
export const SectionHomePage = styled.section<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 0;
  max-width: 120rem;
  width: 90%;
  margin-inline: auto;

  @media (min-width: 950px) {
    flex-direction: row;
    padding: 8rem 0;
    gap: 4rem;
    ${(props) => (props.reverse_item ? " " : "flex-direction: row-reverse;")}
  }
  .text_content {
    text-align: center;
    color: #fff;
  }

  @media (min-width: 950px) {
    .card {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .title {
    font-size: 2.6rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 550px) {
    .title {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: 950px) {
    .title {
      font-size: 5rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  .paragraph {
    font-size: 1.8rem;
  }

  @media (min-width: 950px) {
    .paragraph {
      font-size: 2.6rem;
      text-align: left;
    }
  }

  .img_section {
    width: 90rem;
  }

  .image_section_stranger {
  }

  .media {
    position: relative;
    margin-top: 1rem;
  }

  /*  */

  .section_stranger {
    display: flex;
    align-items: center;
    background-color: #000;
    border: 2px solid hsla(0, 0%, 100%, 0.25);
    border-radius: 0.75em;
    box-shadow: 0 0 2em 0 #000;
    display: flex;

    margin: 0 auto;
    min-width: 15em;
    padding: 0.25em 0.65em;
    position: absolute;
    max-width: 50rem;
    width: 85%;
    bottom: 8%;
    left: 50%;

    transform: translateX(-50%);
  }

  @media (min-width: 950px) {
    .section_stranger {
      width: 30rem;
    }
  }

  .image_section_stranger {
    width: 3rem;
  }

  .image2_section_stranger {
    width: 5rem;
  }
  .text_section_stranger {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    flex: 1;
  }
  .text_title_section_stranger {
    color: #fff;
    font-size: 1.4rem;
  }
  .text_download_section_stranger {
    color: #0071eb;
  }
`;
