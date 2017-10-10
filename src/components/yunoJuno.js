import React from "react";
import styled from "styled-components";
import Theme from "./pixelstewTheme";

const YunoLogo = props => {
  return (
    <div className={props.className}>
      <a href="https://uk.yunojuno.com/p/rob-gilbert">
        <svg viewBox="0 0 102 106.03">
          <path d="M101.43 34.3l-9-15.61a4.24 4.24 0 0 0-5.79-1.55L64.26 30V4.24A4.24 4.24 0 0 0 60 0H42a4.24 4.24 0 0 0-4.24 4.24V30L15.38 17.13a4.24 4.24 0 0 0-5.79 1.55L.57 34.3a4.24 4.24 0 0 0 1.55 5.8L24.49 53 2.12 65.92a4.24 4.24 0 0 0-1.55 5.8l9 15.61a4.24 4.24 0 0 0 5.79 1.55L37.74 76v25.82A4.24 4.24 0 0 0 42 106h18a4.24 4.24 0 0 0 4.24-4.24v-41.1l35.64-20.57a4.24 4.24 0 0 0 1.55-5.79z" />
          <path d="M99.88 65.92l-14.94-8.63-13.26 7.65v15.31l14.94 8.63a4.24 4.24 0 0 0 5.8-1.55l9-15.61a4.24 4.24 0 0 0-1.54-5.8z" />
        </svg>
      </a>
    </div>
  );
};

const Yuno = styled(YunoLogo) `
  width: 30px;
  position: absolute;
  top: 100px;
  right: 1rem;
  @media (min-width: 550px) {
    top: 2rem;
    right: 9rem;
  }
  & svg {
    transition: opacity ${Theme.transition} ease;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      transform: ${Theme.scale};
    }
  }
`;

export default Yuno;
