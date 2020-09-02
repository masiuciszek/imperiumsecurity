import React from "react";
import styled from "styled-components";

interface ListsProps {
  className: string;
}

const Lists: React.FC<ListsProps> = ({ className }) => {
  return (
    <ul className={className}>
      <li></li>
    </ul>
  );
};
export default styled(Lists)``;
