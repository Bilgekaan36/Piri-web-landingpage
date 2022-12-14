import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  let bodyStyle;

  if (typeof document !== "undefined") {
    bodyStyle = document.body.style;
    var [isLocked, setIsLocked] = useState(bodyStyle.overflowY === "hidden");
  }

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const toggle = () => setIsLocked(!isLocked);
  return [isLocked, toggle];
};

export default useBodyScrollLock;
