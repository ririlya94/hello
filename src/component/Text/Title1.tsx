import React from "react";

export type Title1Props = {
  text: string;
  textColor:string;
};

export const Title1: React.FC<Title1Props> = ({
    text,
    textColor
}) => {


  return (
    <>
      <span className={`text-T1 ${textColor} font-poppins font-bold`}>
        {text}
      </span>
    </>
  );
};
