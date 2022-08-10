import { baseBlue, PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(StyledPaddingWrapper)`
  margin: 70px 0 50px;
  height: 500px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 250px 0;
    height: 600px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 80px 0 280px;
    height: 700px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 200px 0 400px;
  } ;
`;

export const Root = styled(PaddingContainer)`
  position: relative;
  display: flex;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 100px;
  align-items: center;
  width: 45vw;
  height: 100%;
  display: none;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
    margin-left: 10px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 270px;
  }
`;

export const Feature = styled.div`
  display: none;
  height: 16px;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  text-align: center;
  color: #4579f5;
  margin-right: 0px;
  margin-bottom: 16px;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: block;
    margin-right: 100px;
    text-align: right;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    padding-right: 130px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    padding-right: 222px;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  color: #fff;
  max-width: 450px;
  text-align: center;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 28px;
    max-width: 300px;
    text-align: left;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 32px;
    max-width: 380px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    text-align: left;
    font-size: 40px;
    margin-right: 100px;
    max-width: 461px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: #d1e0fb;
  opacity: 0.8;
  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: 344px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    max-width: 420px;
    font-size: 18px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 20px;
    max-width: 500px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  grid-template-rows: 50% 50%;
`;

export const Buttons = styled(Button)<{ bgColor?: string; bxShadow?: string; blue?: boolean }>`
  &&& {
    color: white;
    display: flex;
    width: 155px;
    height: 84px;
    border-radius: 12px;
    background: ${({ bgColor }) => bgColor || baseBlue};
    box-shadow: ${({ bxShadow }) => bxShadow || 'none'};
    cursor: pointer;
    &:hover {
      background: ${({ blue }) => (blue ? baseBlue : 'none')};
    }
    ${(props) => props.theme.breakpoints.up('lg')} {
      width: 205px;
      height: 84px;
    }
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  ${(props) => props.theme.breakpoints.up('md')} {
    justify-content: flex-end;
    margin-bottom: 0px;
  }
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${baseBlue};
  padding: 0 20px;
  border-radius: 300px 300px 0 0;
  min-height: 100px;
  ${(props) => props.theme.breakpoints.up('md')} {
    border-radius: 0 300px 0 300px;
    padding: 0 120px;
    height: 100px;
    width: 70%;
    justify-content: flex-end;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 128px;
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  align-items: center;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-right: 78px;
    margin-top: 24px;
    align-items: flex-end;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-right: 180px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
