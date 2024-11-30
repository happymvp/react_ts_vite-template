import type { ClassNameValue } from "tailwind-merge";

import { twMerge } from "tailwind-merge";

export function cnTw(...inputs: ClassNameValue[]): string {
  return twMerge(inputs);
}
