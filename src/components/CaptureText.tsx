import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { handleFlex } from "../utils/helpers";

interface CaptureTextProps {
  captureTitle: string;
  captureText: string;
}

const StyledCapture = styled(motion.section)`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 3rem auto 1rem auto;
  padding: 1em;
  ${handleFlex("column", "center", "center")};
  h2 {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.button};
  }
  p {
    line-height: 2.2rem;
  }
`;

const CaptureText: React.FC<CaptureTextProps> = ({
  captureText,
  captureTitle,
}) => {
  return (
    <StyledCapture
      initial={{ opacity: 0, x: "-1000%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>{captureText}</p>
      <h2>{captureTitle}</h2>
    </StyledCapture>
  );
};
export default CaptureText;
