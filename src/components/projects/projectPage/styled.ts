import { StyledPaddingWrapper, PaddingContainer, baseBlue } from '@src/components/shared';
import styled from 'styled-components';

export const Container = styled(StyledPaddingWrapper)`
  margin: 70px 0 50px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 150px 0 20px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 200px 0 20px;
  }
`;

export const Root = styled(PaddingContainer)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 88%;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 80%;
  & * {
    border-radius: 12px;
    height: 80%;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 95%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  background-color: ${baseBlue};
  min-height: 100px;
  width: 100%;
  border-radius: 0 0 100px 100px;
  margin-bottom: 12px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 32px;
    min-height: 120px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 32px;
    margin-bottom: 40px;
    border-radius: 0 300px 0 300px;
    padding-left: 80px;
    height: 100px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 60px;
    margin-bottom: 100px;
    padding-left: 146px;
    height: 128px;
  }
`;

export const Desc = styled.div`
  color: #d1e0fb;
  font-size: 16px;
  margin-top: 8px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 18px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 20px;
    margin-top: 24px;
    line-height: 1.4;
    width: 95%;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 32px;
    width: 93%;
    line-height: 1.8;
  }
`;

export const List = styled.div`
  align-self: flex-start;
  margin-left: 5%;

  display: flex;
  justify-content: flex-start;
  gap: 32px;
`;

export const Icon = styled.div`
  cursor: pointer;
`;
