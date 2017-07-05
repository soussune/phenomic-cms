import { injectGlobal } from "styled-components";

import theme from "./theme";

injectGlobal`
  .phenomic-Markdown h1:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h2,
  .phenomic-Markdown h3,
  .phenomic-Markdown h4,
  .phenomic-Markdown h5,
  .phenomic-Markdown h6 {
    position: relative;
  }

  .phenomic-Markdown .phenomic-HeadingAnchor {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -32px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 20px;
    text-decoration: none;
    opacity: 0.1;
    transition: opacity 0.2s;
  }

  .phenomic-Markdown h1:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h2:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h3:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h4:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h5:hover .phenomic-HeadingAnchor,
  .phenomic-Markdown h6:hover .phenomic-HeadingAnchor {
    opacity: 1;
  }

  .phenomic-Markdown {
    line-height: 1.5;
  }

  .phenomic-Markdown pre {
    background: #fafafa;
    padding: 10px;
    font-size: 16px;
    overflow-x: auto;
  }

  .phenomic-Markdown a {
    color: #006BF6;
  }

  .phenomic-Markdown .code {
    font-family: ${theme.fonts.monospace};
  }

  .phenomic-Markdown .hljs-comment {
    color: #aaa;
  }

  .phenomic-Markdown .hljs-keyword {
    color: #266676;
  }

  .phenomic-Markdown .hljs-string {
    color: #78C286;
  }
`;
