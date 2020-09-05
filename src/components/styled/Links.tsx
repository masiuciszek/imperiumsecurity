import { Link } from "gatsby";
import styled from "styled-components";

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
  width: 8em;
  margin: 1em auto;
  &:hover {
    color: ${(props) => props.theme.colors.background};
    width: 8.25em;
    background: ${({ theme }) => theme.colors.text};
    &:after {
      width: 100%;
      padding: 0.1rem;
    }
  }
`;
