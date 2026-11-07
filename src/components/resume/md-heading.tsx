import type { CSSProperties, ReactNode } from "react";

type MdHeadingProps = {
  level: 1 | 2 | 3;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
} as const;

/**
 * Renders a visual heading for humans, with an inline Markdown marker
 * (`#` / `##` / `###` + NBSP) kept in the PDF text layer for AI/ATS parsers.
 */
export function MdHeading({
  level,
  id,
  className,
  style,
  children,
}: MdHeadingProps) {
  const Tag = tags[level];

  return (
    <Tag id={id} className={className} style={style}>
      <span className="resume-md-marker" aria-hidden="true">
        {`${"#".repeat(level)}\u00A0`}
      </span>
      {children}
    </Tag>
  );
}
