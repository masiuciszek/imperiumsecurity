import { Link } from "gatsby";
import styled from "styled-components";
import { above, below } from "../../utils/helpers";

export const HoverLink = styled(Link)`
  text-transform: capitalize;
  display: block;
  position: relative;
  transition: ${({ theme }) => theme.transition.mainTransition};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.button};
    width: 0;
    padding: 0;
    transition: ${({ theme }) => theme.transition.mainTransition};
  }
  &:hover {
    color: ${(props) => props.theme.colors.button};
    &:after {
      width: 100%;
      padding: 0.1em;
    }
  }
`;

export const CtaLink = styled(HoverLink)`
  font-size: 1.7em;
  border: 3px solid ${({ theme }) => theme.colors.background};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 14em;
  margin: 1em auto;
  padding: 0.2em 0.7em;
  font-size: 1.2rem;
  &:hover {
    color: ${(props) => props.theme.colors.background};
    width: 13.5em;
    background: ${({ theme }) => theme.colors.text};
    &:after {
      width: 100%;
      padding: 0.1rem;
    }
  }
`;

export const ContactInfo = styled.a`
  position: absolute;
  color: ${({ theme }) => theme.colors.button};
  top: 6rem;
  right: 1rem;
  .small {
    font-size: 1.1em;
    text-transform: capitalize;
    ${above.small`
      display: none;
    `}
  }
  .large {
    ${below.small`
      display:none;
    `}
  }
  ${above.medium`
    right: 1rem;
    top: 9rem;
  `}
  ${below.medium`
    top: 9rem;
  `}
`;
