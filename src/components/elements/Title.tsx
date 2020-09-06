import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { below, handleFlex } from "../../utils/helpers";
import { CtaLink } from "../styled/Links";
interface TitleProps {
  className: string;
  title: string;
  subTitle?: string;
  isCta?: boolean;
  ctaPath?: string;
}

const Title: React.FC<TitleProps> = ({
  className,
  title,
  subTitle,
  isCta,
  ctaPath,
}) => {
  const handleDashedText = (text: string = "") => {
    return text.split("-").join(" ");
  };

  console.log();
  return (
    <section className={className}>
      <h1 data-testid="elements-Title">{title}</h1>
      <p>{subTitle}</p>
      {isCta && (
        <CtaLink to={`/${ctaPath || ""}`}>
          {handleDashedText(ctaPath) || "Home"}
        </CtaLink>
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 1em 0.5em;
  width: 70%;
  ${handleFlex("column", "center", "center")};
  h1 {
    text-shadow: 2px 3px 3px #333;
    text-align: center;
    color: #fff;
    background: ${({ theme }) => theme.colors.rgbaDark};
    padding: 0.3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 12em;
  }
  ${below.small`
    width: 90%;
  `}
`;
