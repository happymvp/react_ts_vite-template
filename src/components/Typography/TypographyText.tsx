import { FC } from "react";

import type { TypographyProps } from "./types.ts";

import { cnTw } from "../../utils/cn.ts";
import styles from "./typography.module.css";

interface TypographyTextProps extends TypographyProps {
  size: "L" | "M" | "S";
  Tag: "label" | "legend" | "p" | "span";
}

export const TypographyText: FC<TypographyTextProps> = ({
  className = "",
  content,
  size,
  Tag,
}) => {
  return (
    <Tag className={cnTw(styles.typography, styles[`text${size}`], className)}>
      {content}
    </Tag>
  );
};
