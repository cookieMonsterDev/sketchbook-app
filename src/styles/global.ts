import { css } from "@emotion/react";

export const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pathway Extreme", sans-serif;
  }

  &:root {
    --light-gray: rgb(242, 242, 249);
    --gray: rgba(191, 192, 198);
    --red: rgb(255, 0, 255);
  }
`;
