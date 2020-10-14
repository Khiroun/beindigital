import { useLayoutEffect, useState } from "react";

const useWindowPosition = (id) => {
  const [animation, setAnimation] = useState(true);
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      function updatePosition() {
        const offsetHeight = window.document.getElementById(id).offsetHeight;

        if (window.pageYOffset > offsetHeight * 0.7) {
          setAnimation(true);
        } else {
          setAnimation(false);
        }
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, [id]);
  }

  return animation;
};

export default useWindowPosition;
