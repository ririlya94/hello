import React from "react";

export type Title2Props = {
  text: string;
  textColor: string;
};

export const Title2: React.FC<Title2Props> = ({
  text,
  textColor
}) => {


  return (
    <>
      <span className={`text-T2 ${textColor} font-poppins font-semibold`}>
        {text}
      </span>
    </>
  );
};
