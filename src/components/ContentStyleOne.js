import React from "react";
import useMedia from "use-media";

export default function ContentStyleOne({
  titleStart,
  titleEnd,
  textDirection,
  className,
  classNameSpan,
}) {
  // Define media query for lg breakpoint (1024px and above)
  const isLg = useMedia({ minWidth: 1024 });

  console.log("textDirection", textDirection)

  return (
    <>
      <div className={`${className} ${isLg ? textDirection : "text-center"}`}>
        <span className={`${classNameSpan}`}>{titleStart}</span> {titleEnd}
      </div>
    </>
  );
}
