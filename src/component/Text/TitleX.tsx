import React from "react";

export type TitleXProps = {
  text: string;
};

export const TitleX: React.FC<TitleXProps> = ({
    text
}) => {

    const textColor = "text-black dark:text-white";

  return (
    <>
      <span className={`text-X ${textColor} font-poppins font-bold`}>
        {text}
      </span>
    </>
  );
};
