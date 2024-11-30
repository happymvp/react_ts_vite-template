import { FC } from "react";

import type { TypographyProps } from "./types.ts";

import { cnTw } from "../../utils/cn.ts";
import styles from "./typography.module.css";

export interface TypographyHeadingProps extends TypographyProps {
  isProximityScrollSnapping?: boolean;
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const TypographyHeading: FC<TypographyHeadingProps> = ({
  className = "",
  content,
  isProximityScrollSnapping = false,
  Tag,
}) => {
  return (
    <Tag
      className={cnTw(
        styles.typography,
        styles[Tag],
        isProximityScrollSnapping && styles.headingSnapping,
        className,
      )}
    >
      {content}
    </Tag>
  );
};
