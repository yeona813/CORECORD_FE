import styled from 'styled-components';

export const ListPage = styled.div`
  background-color: ${({ theme }) => theme.colors.gray25};
  width: 100%;
  height: 100%;
`;

export const Content = styled.div<{ $isEmpty: boolean }>`
  width: 100%;
  height: calc(100vh - 11.125rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.theme.breakpoints.min} {
    padding: 0rem 4.75rem;
    ${(props) =>
      !props.$isEmpty &&
      `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    `}
  }
`;
