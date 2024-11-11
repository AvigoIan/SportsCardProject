import { css } from "@emotion/react";
import {
  applicationColors,
  applicationDarkColors,
  applicationLightColors,
} from "./color";
import { applicationPadding } from "./spacing";
import { applicationTypography } from "./typography";

export const scrollbarStyle = css`
  scrollbar-gutter: auto;

  /* Hide scrollbar for IE, Edge, Firefox, and other browsers */
  scrollbar-width: thin; /* Firefox */
  overflow-y: auto;
`;

export const applicationTheme = () => css`
  :root {
    --ajs-font-size-base: 12px;
    font-size: var(--ajs-base-font-size);
  }
  :root {
    ${css(applicationColors)}
    ${css(applicationPadding)}
    ${css(applicationTypography)}
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--palette-blue-0);
    border: 2px solid transparent;
    background-clip: content-box;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--palette-blue-1);
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  @media (prefers-color-scheme: light) {
    :root {
      ${css(applicationLightColors)}
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${css(applicationDarkColors)}
    }
  }
`;
