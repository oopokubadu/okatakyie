import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Portal({ rootId, dep, children }) {
  let isServer = typeof window === "undefined" ? true : false;

  const containerEl = isServer ? null : document.getElementById(rootId);
  const target = useRef(containerEl);

  useEffect(
    function () {
      if (isServer) {
        return;
      }

      return () => {
        window.requestAnimationFrame(() => {
          if (target.current?.childNodes.length === 0) {
            target.current.remove();
            target.current = null;
          }
        });
      };
    },
    [rootId, dep]
  );

  if (!target.current && !isServer) {
    target.current = document.createElement("div");
    target.current.setAttribute("id", rootId);
    document.body.appendChild(target.current);
  }

  if (target.current) {
    return createPortal(children, target.current);
  } else {
    return null;
  }
}
