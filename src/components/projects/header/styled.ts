import { baseBlue, PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled, { keyframes } from 'styled-components';

export const Container = styled(StyledPaddingWrapper)`
  margin: 80px 0 50px;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 200px 0 20px;
  }
`;

export const Root = styled(PaddingContainer)`
  position: relative;
  display: flex;
`;

export const ImgWrapper = styled.div`
  width: 46%;
  height: auto;
  display: none;

  ${(props) => props.theme.breakpoints.up('md')} {
    display: block;
    margin-left: 70px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.23;
  color: #fff;
  max-width: 450px;
  text-align: center;

  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 32px;
    text-align: left;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 42px;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${baseBlue};
  padding: 0 20px;
  border-radius: 0 0 80px 80px;
  min-height: 100px;
  width: 100%;

  ${(props) => props.theme.breakpoints.up('md')} {
    border-radius: 0 300px 0 300px;
    padding: 0 120px;
    height: 100px;
    width: 54%;
    margin-top: 60px;
    justify-content: space-between;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 128px;
  }
`;

const wheel = keyframes`
  to {
    opacity: 0;
    top: 60px;
  }
`;

export const Mouse = styled.div`
  width: 40px;
  height: 70px;
  border: 3px solid #fff;
  border-radius: 60px;
  position: relative;
  margin-right: 20px;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 2s infinite;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    width: 50px;
    height: 90px;
    &::before {
      width: 12px;
      height: 12px;
      top: 10px;
    }
  }
`;
