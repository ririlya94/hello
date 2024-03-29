import React from "react";

export type TitleXProps = {
  text: string;
  textColor: string;
};

export const TitleX: React.FC<TitleXProps> = ({
  text,
  textColor
}) => {

  return (
    <>
      <span className={`text-X ${textColor} font-poppins font-bold`}>
        {text}
      </span>
    </>
  );
};
