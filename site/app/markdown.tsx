"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { CopyButton } from "./copy-button";
import type { ComponentPropsWithoutRef } from "react";

function Pre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
  // Extract text content from children for copy button
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (node && typeof node === "object" && "props" in node) {
      return getTextContent(
        (node as React.ReactElement<{ children?: React.ReactNode }>).props
          .children
      );
    }
    return "";
  };

  const text = getTextContent(children).trim();
  const isCommand =
    /^(curl|npm|pip|cargo|go |bash|powershell|claw|\.\/|Invoke-|Set-|\/plugin)/m.test(
      text
    );
  const isSingleLine = !text.includes("\n");
  const showCopy = isSingleLine || isCommand;

  if (showCopy) {
    return (
      <div className="pre-wrapper">
        <pre {...props}>{children}</pre>
        <CopyButton text={text} />
      </div>
    );
  }

  return <pre {...props}>{children}</pre>;
}

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{ pre: Pre }}
    >
      {content}
    </ReactMarkdown>
  );
}
