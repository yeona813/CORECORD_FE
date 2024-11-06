import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8.8125rem;
  justify-content: space-between;
  padding: 2.5rem 0rem 1.25rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

export const Title = styled.h4`
  line-height: 135%;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const FolderIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.6875rem;
  background-color: ${({ theme }) => theme.colors.blue50};
  border-radius: 6.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
