import { PaddingContainer } from '@src/components/shared';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Root = styled(PaddingContainer)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  margin: 90px 0 0;
  margin-bottom: 90px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 353px 0 398px;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  left: 119px;
  width: 492px;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  display: none;
  align-items: flex-end;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
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
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-right: 222px;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
  max-width: 450px;
  margin: 14px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    max-width: 300px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 100px;
    font-size: 40px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-left: initial;
    text-align: left;
    font-size: 40px;
    max-width: 450px;
  }
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
  &&& {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155px;
    height: 84px;
    margin-right: 24px;
    border-radius: 12px;
    background: ${({ bgColor }) => bgColor || '#4579f5'};
    box-shadow: ${({ bxShadow }) => bxShadow || 'none'};
    cursor: pointer;
    &:hover {
      background: ${({ blue }) => (blue ? '#4579f5' : 'none')};
    }
    ${(props) => props.theme.breakpoints.up('lg')} {
      width: 205px;
      height: 84px;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  background-color: #377dff;
  padding: 0 46px;
  border-radius: 0 100px 0 100px;
  ${(props) => props.theme.breakpoints.up('lg')} {
    border-radius: 300px 0 300px 0;
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-right: 222px;
  }
`;
