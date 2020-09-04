import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
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
  return (
    <section className={className}>
      <h1 data-testid="elements-Title">{title}</h1>
      <p>{subTitle}</p>
      {isCta && <Link to={`/${ctaPath}`}>{ctaPath}</Link>}
    </section>
  );
};
export default styled(Title)``;
