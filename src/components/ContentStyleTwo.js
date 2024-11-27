import React from "react";
import useMedia from "use-media";

export default function ContentStyleTwo({
  titleStart,
  titleCenter,
  titleEnd,
  className,
  classNameSpan,
}) {
  // Define media query for lg breakpoint (1024px and above)
  const isLg = useMedia({ minWidth: 1024 });

  return (
    <>
      <div className={`${className} ${isLg ? "text-center" : "text-center"}`}>
        {titleStart} <span className={`${classNameSpan}`}>{titleCenter}</span>{" "}
        {titleEnd}
      </div>
    </>
  );
}
