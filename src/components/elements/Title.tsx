import React from "react";
import styled from "styled-components";
interface TitleProps {
  className: string;
  title: string;
  subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ className, title, subTitle }) => {
  return (
    <section className={className}>
      <h1 data-testid="elements-Title">{title}</h1>
      <p>{subTitle}</p>
    </section>
  );
};
export default styled(Title)``;
