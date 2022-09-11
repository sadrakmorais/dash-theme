import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 14px;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divider {
      width: 100%;
      height: 3px;
      background-color: ${theme.colors.text};
      border-radius: 30px;
      opacity: 0.8;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;

      button {
        color: ${theme.colors.text};
        font-size: 4.5rem;
        background-color: transparent;
        border: 0;
      }
    }
  `}
`;
