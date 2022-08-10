import { baseBlue, PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

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
  font-size: 25px;
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
    font-size: 60px;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
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
    justify-content: flex-start;
    width: 54%;
    margin-top: 60px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 128px;
  }
`;
