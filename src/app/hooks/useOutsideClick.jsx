"use client";

import React, { useEffect } from "react";

export default function useOutsideClick(ref, setMenuOpen) {
  useEffect(() => {
    function handler(e) {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return null;
}
