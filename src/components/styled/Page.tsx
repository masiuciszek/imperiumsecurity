import styled from "styled-components";

export const Page = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const HomeGrid = styled.section`
  margin: 2em auto;
  width: 97%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 2rem;
`;
