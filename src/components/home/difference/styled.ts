import { baseBlue, PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 120px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 340px;
  }
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 100px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 70px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${baseBlue};
  padding: 0 46px;
  border-radius: 300px 300px 0 0;
  height: 100px;
  ${(props) => props.theme.breakpoints.up('md')} {
    border-radius: 130px 0 130px 0;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 158px;
  }
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 12px 0;
  font-size: 13px;
  font-weight: 600;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-left: 154px;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  text-align: center;
  color: #fff;
  margin: 14px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    text-align: center;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 50px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 76px;
  }
`;

export const Desc = styled.span`
  font-weight: 500;
  line-height: 1.5;
  color: #d1e0fb;
  font-size: 16px;
  width: 100%;
  text-align: center;
  opacity: 0.8;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 24px;
    max-width: 300px;
    margin-right: 20px;
    text-align: left;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 30px;
    max-width: 450px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  flex-wrap: none;
  justify-content: space-around;
  flex-wrap: wrap;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 600px;
    margin-top: 30px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 100%;
    margin-top: 60px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 0px;
  }
`;

export const WrappedTitle = styled.span`
  color: #a0c4e1;
  font-size: 32px;
  font-weight: bold;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 40px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 44px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 55px;
  }
`;

export const WrappedDesc = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #d1e0fb;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 20px;
    width: 150px;
  }
`;

export const ImgWrapper = styled.div`
  display: none;
  position: absolute;
  width: auto;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  right: 5vw;
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
