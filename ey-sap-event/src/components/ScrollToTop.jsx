import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force reset BEFORE render stabilizes
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force again after render
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

  }, [pathname]);

  return null;
}