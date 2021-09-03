import { MouseEventHandler, useMemo } from "react";
import { useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  let callbacks = useMemo(
    () => ({
      onMouseEnter: () => {
        setHovered(true);
      },

      onMouseLeave: () => {
        setHovered(false);
      },
    }),
    []
  );
  return [hovered, callbacks];
}
