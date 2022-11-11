import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// with this component every time you navigate to a different route, it scrolls to the top
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
