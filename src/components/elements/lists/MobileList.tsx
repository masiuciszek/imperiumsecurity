import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { handleFlex, below, above } from "../../../utils/helpers";
import { HoverLink } from "../../styled/Links";

interface MobileListProps {
  onPageRoutes: PageRoutes[];
  on: boolean;
  className?: string;
}

const MobileList: React.FC<MobileListProps> = ({
  on,
  onPageRoutes,
  className = "mobile-list",
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <motion.ul
      className={className}
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.9 }}
    >
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </motion.ul>
  );
};

export default styled(MobileList)`
  position: fixed;
  top: -1rem;
  right: 0;
  left: 0;
  ${handleFlex("column", "center", "center")};
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.rgbaDark};
  z-index: 2;
  li {
    padding: 1em 0;
    width: 100%;
    margin-bottom: 0.5em;
    margin-right: 2rem;
    display: block;
    text-align: center;
  }
  a {
    display: inline;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.text};
  }
  ${above.medium`
    display: none;
  `}
`;
