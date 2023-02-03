import React from "react";

export type Title3Props = {
  text: string;
  textColor: string;
};

export const Title3: React.FC<Title3Props> = ({
  text,
  textColor
}) => {

  return (
    <>
      <span className={`text-T3 ${textColor} font-poppins font-bold`}>
        {text}
      </span>
    </>
  );
};
