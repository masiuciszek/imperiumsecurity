import styled from "styled-components";

export const Page = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const HomeGrid = styled.section`
  margin: 3em auto 5em auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
