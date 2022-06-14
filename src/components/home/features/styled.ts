import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(StyledPaddingWrapper)`
  margin: 90px 0 90px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 428px 0 438px;
  };
`;

export const Root = styled(PaddingContainer)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: start;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  left: 5vw;
  width: auto;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  display: none;
  align-items: flex-end;
  & svg {
    height: auto;
    width: 25vw;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 517px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 28px;
  width: 100%;
  ${(props) => props.theme.breakpoints.up('md')} {
    align-items: flex-end;
  }
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
    margin-right: 150px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 100px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-left: initial;
    text-align: left;
    font-size: 40px;
    max-width: 600px;
    margin-right: 40px;
  }
`;

export const Desc = styled.div`
  height: 74.6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: #d1e0fb;
  max-width: 461px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 20px;
  }
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
  border-radius: 300px 0 300px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    justify-content: flex-end;
    border-radius: 0 300px 0 300px;
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  align-items: center;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-right: 40px;
    align-items: normal;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-right: 222px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
