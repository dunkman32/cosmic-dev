import { PaddingContainer, StyledButton, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position:fixed;
  width: 100%;
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  z-index: 10;
`;

export const Main = styled(PaddingContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 117px;
  z-index: 10;
`;

export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Logo3 = styled(Logo)`
  color: #212429;
`;

export const LogoWrapper = styled.div`
  display: flex;
  background: #377dff;
  border-radius:0 0 70px 70px;
  padding: 40px;
  gap: 5px;
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
