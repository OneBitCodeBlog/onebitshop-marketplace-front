import React, { useState } from "react";
import { DescriptionTxt, ReadMoreLess } from "./styled";

interface Props {
  desc: string;
}

const Description = ({ desc }: Props) => {
  const [readMoreText, setReadMoreText] = useState("Ler mais");
  const [numbersOfLines, setNumbersOfLine] = useState(3);

  const handleReadMore = (numberLines: number) => {
    if (numberLines != 3) {
      setReadMoreText("Ler mais");
      setNumbersOfLine(3);
    } else {
      setReadMoreText("Ler menos");
      setNumbersOfLine(1000);
    }
  };

  return (
    <>
      <DescriptionTxt numberOfLines={numbersOfLines}>{desc}</DescriptionTxt>

      {desc.length >= 115 ? (
        <ReadMoreLess
          onPress={() => {
            handleReadMore(numbersOfLines);
          }}
        >
          {readMoreText}
        </ReadMoreLess>
      ) : null}
    </>
  );
};

export default Description;
