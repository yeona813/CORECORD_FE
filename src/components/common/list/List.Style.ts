import styled from 'styled-components';

export const List = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    max-width: 23.0625rem;
    height: 8.8125rem;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Title = styled.h4`
  line-height: 140%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${(props) => props.theme.breakpoints.min} {
    line-height: 135%;
  }
`;

export const DateText = styled.p`
  font-size: 0.8125rem;
  line-height: 145%;
`;
