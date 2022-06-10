import styled from 'styled-components';
import {
  IconButton, List, ListItemButton,
} from '@mui/material';
import { StyleProp } from '@src/components/layout/header/burger';

export const StyledMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${({ open }: StyleProp) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  overflow: auto;
  transition: transform 0.3s ease-in-out;
  z-index: 11;
  background-color:#212429;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const StyledBurger = styled(IconButton)<{ top?: string }>`
  top: ${({ top }) => top};
  width: 40px;
  height: 40px;
  background: transparent;
  cursor: pointer;
  z-index: 13;
`;

export const NavItemsWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  position: relative;
`;

export const NavItem = styled(ListItemButton)<{ border?: boolean }>`
  padding: 16px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: ${({ border }) => (border ? '1px solid #e5e5ea' : 'none')};
  position: relative;
`;

export const NavItemText = styled.p<{ isActive?: boolean }>`
  font-size: 20px;
  line-height: 3;
  text-align: left;
  color: ${({ isActive }) => (isActive ? '#377dff' : '#fff')};
`;
export const PlusMinusWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const BottomButtons = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const WrapHeader = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${({ width }) => width || '300px'};
  width: ${({ width }) => width || '100%'};
`;

export const WrapDonate = styled.div<{ width?: string }>`
  display: flex;
  justify-content: space-around;
  width: ${({ width }) => width || '100%'};
`;
