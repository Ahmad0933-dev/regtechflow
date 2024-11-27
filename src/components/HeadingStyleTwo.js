import React from "react";
import useMedia from "use-media";

export default function HeadingStyleTwo({ title, className }) {
  // Define media query for lg breakpoint (1024px and above)
  const isLg = useMedia({ minWidth: 1024 });

  return (
    <>
      <div className={`${className} ${isLg ? "text-left" : "text-center"}`}>
        {title}
      </div>
    </>
  );
}
