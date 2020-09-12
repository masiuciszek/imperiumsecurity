import styled from "styled-components";

export const Page = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const HomeGrid = styled.section`
  margin: 5rem auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 1em;
`;
