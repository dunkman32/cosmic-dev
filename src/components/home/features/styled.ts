import { PaddingContainer } from '@src/components/shared';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Root = styled(PaddingContainer)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  margin: 353px 0 398px;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  left: 119px;
  width: 492px;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  display: flex;
  align-items: flex-end;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  gap: 28px;
  width: 100%;
  //max-width: 461px;
`;

export const Feature = styled.div`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  text-align: right;
  color: #4579f5;
  max-width: 461px;
  margin-right: 222px;

`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  max-width: 461px;
  margin: 15px 0;
  margin-right: 222px;
`;

export const Desc = styled.div`
  height: 74.6px;
  opacity: 0.8;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: #d1e0fb;
  max-width: 461px;
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-row-gap: 25px;
  grid-template-rows: repeat(2, 1fr);
`;

export const Buttons = styled(Button)<{ bgColor?: string; bxShadow?: string; blue?: boolean }>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 84px;
  margin-right: 24px;
  border-radius: 12px;
  background: ${({ bgColor }) => bgColor || '#4579f5'};
  box-shadow: ${({ bxShadow }) => bxShadow || 'none'};
  cursor: pointer;
  &:hover {
    background: ${({ blue }) => (blue ? '#4579f5' : 'none')};
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: #4579f5;
  border-bottom-left-radius: 300px;
  border-top-right-radius: 300px;
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 222px
`;
