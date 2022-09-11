import styled, { css } from 'styled-components';

export const MainGrid = styled.section`
  ${({ theme }) => css`
    grid-template-areas: 'navbar content aside';
    grid-template-columns: 1fr 7fr 2fr;
    display: grid;
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: ${theme.colors.text};
  `}
`;

export const WrapperMenu = styled.div`
  ${({ theme }) => css`
    grid-area: navbar;
    padding: 2rem;
  `}
`;
export const WrapperContent = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding: 2rem;
  `}
`;
export const WrapperAside = styled.div`
  grid-area: aside;
`;
