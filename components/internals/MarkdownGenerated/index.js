import React from "react";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";

import "../../../styles/markdown";

const MarkdownGenerated = ({ body }) =>
  <div className="phenomic-Markdown">
    <BodyRenderer>
      {body}
    </BodyRenderer>
  </div>;

export default MarkdownGenerated;
