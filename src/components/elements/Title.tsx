import React from "react";
import styled from "styled-components";
interface TitleProps {
  className: string;
}

const Title: React.FC<TitleProps> = ({ className }) => {
  return <section className={className}></section>;
};
export default styled(Title)``;
