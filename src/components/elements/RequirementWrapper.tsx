import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { below, handleFlex } from "../../utils/helpers";
import { ContactInfo } from "../styled/Links";

interface RequirementWrapperProps {
  className: string;
  onContactEmail: string;
}

const Content = styled.div`
  background: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 3em auto 5rem auto;
  padding: 1em;
  border: 2px solid ${({ theme }) => theme.colors.button};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  ${handleFlex("column", "center", "flex-start")};
  position: relative;
  h3 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
    display: inline-block;
  }

  h3,
  p,
  li {
    color: ${({ theme }) => theme.colors.background};
  }
  li {
    text-transform: capitalize;
    padding: 0.5em 0;
  }
`;

const RequirementWrapper: React.FC<RequirementWrapperProps> = ({
  className,
  onContactEmail,
}) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, x: -200, rotate: 15 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 2 }}
    >
      <Content>
        <ContactInfo href={`mailto: ${onContactEmail}`} className="contactInfo">
          ✉️ <span>{onContactEmail}</span>
        </ContactInfo>

        <h3>Dessa uppgifter behöver vi av dig:</h3>
        <p>
          Vi söker ständigt efter duktiga medarbetare, du är alltid välkommen
          att skicka in en intresseanmälan till info@imperiumsecurity.nu
        </p>
        <ul>
          <li>namn</li>
          <li>personnummer</li>
          <li>Vilka utbildningar du har (utbildningsbevis)</li>
          <li>Kontaktuppgifter</li>
          <li>Bild (frivilligt)</li>
        </ul>
      </Content>
    </motion.section>
  );
};

export default styled(RequirementWrapper)`
  .contactInfo {
    z-index: 5;
    top: 0.5rem;
    background: ${({ theme: { colors } }) => colors.background};
    padding: 0.5em;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    transition: ${({ theme: { transition } }) => transition.mainTransition};
    border: 2px solid transparent;
    &:hover {
      background: ${({ theme: { colors } }) => colors.text};
      color: ${({ theme: { colors } }) => colors.background};
      padding: 0.4em;
      border: 3px solid ${({ theme: { colors } }) => colors.button};
    }
    ${below.small`
      span{
        display: none;
      }
    `}
  }
`;
