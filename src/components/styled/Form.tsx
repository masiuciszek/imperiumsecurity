import styled from "styled-components";
import { below, handleFlex } from "../../utils/helpers";

export const Form = styled.form`
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.colors.background};
`;

export const Label = styled.label`
  margin-right: auto;
  padding: 1em 0;
  color: ${({ theme }) => theme.colors.background};
  span {
    font-size: 1.4em;
  }
  ${below.small`
    margin: 0 auto;
    width: 100%;
  `}
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.button};
  padding: 0.4em 0.8em;
  font-size: 1.3em;
  margin-right: auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition.mainTransition};
  outline: 0;
  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.elevations[5]};
    width: 97%;
    border: 2px solid ${({ theme }) => theme.colors.background};
  }
  ${below.small`
    margin: 0 auto;
  `}
`;

export const FormGroup = styled.div`
  ${handleFlex("column", "center", "center")};
  width: 30em;
  margin: 1em auto;
  ${below.medium`
    width: 25em;
  `}
  ${below.small`
    width: 17em;
  `}
`;

export const Text = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.button};
  padding: 0.4em 0.8em;
  width: 100%;
  min-height: 9em;
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  box-shadow: ${({ theme }) => theme.shadow.elevations[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const BtnSubmit = styled.button`
  margin: 2em auto;
  display: block;
  font-size: 1.3rem;
  width: 12em;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.button};
  padding: 0.4em;
  transition: ${({ theme }) => theme.transition.mainTransition};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.text};
  }
`;
