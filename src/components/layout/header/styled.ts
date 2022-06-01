import { PaddingContainer, StyledButton, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
    width: 100%;
`;

export const Main = styled(PaddingContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 117px;
`;

export const Logo = styled.div`
  border-radius:0 0 240px 240px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.div`
   display: flex;
   gap: 38.4px;
  align-items: center;
`;

export const Card = styled.div`
  &:nth-child(6) {
    background: white;
  }
`;

export const Desc = styled.div`
  color: #d1e0fb;
  opacity: 0.8;
  font-weight: 600;
`;

export const Button = styled(StyledButton)`
    color: #ffff;
`;
