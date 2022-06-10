import { PaddingContainer, StyledButton, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position:fixed;
  top:0;
  width: 100%;
  background-color:#212429; 
  z-index: 10;
  ${(props) => props.theme.breakpoints.up('md')} {
    background-color: rgba(33, 36, 41, 0.5); /* Black w/opacity/see-through */
    backdrop-filter: blur(40px);
  }
`;

export const Main = styled(PaddingContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  z-index: 10;
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 117px;
  }
`;

export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Logo3 = styled(Logo)`
  color: #212429;
`;

export const LogoWrapper = styled.div`
  display: none;
  background: #377dff;
  border-radius:0 0 80px 80px;
  padding: 40px;
  gap: 5px;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
`;

export const List = styled.div`
   display: none;
   gap: 38.4px;
   align-items: center;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
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

export const BurgerArea = styled.div`
  ${(props) => props.theme.breakpoints.up('xs')} {
    width: 100%;
    z-index: 9;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const StyledBtn = styled.div`
  font-size:12px;
  color: white;
`;
