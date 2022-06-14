import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 340px;
  }
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 90px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 157px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #377dff;
  padding: 0 46px;
  border-radius: 0 300px 0 300px;
  ${(props) => props.theme.breakpoints.up('md')} {
    border-radius: 300px 0 300px 0;
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
  text-align: left;
  color: #fff;
  max-width: 450px;
  margin: 14px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    max-width: 300px;
    margin-left: 100px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 40px;
    max-width: 450px;
  }
`;

export const Desc = styled.span`
  margin-top: 26px;
  font-weight: 500;
  line-height: 1.5;
  color: #d1e0fb;
  font-size: 16px;
  max-width: 450px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 20px;
    margin-left: 150px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  flex-wrap: none;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-left: 150px;
    width: 600px;
    flex-wrap: wrap;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
    margin-right: 0;
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

export const WrappedTitle = styled.span`
  color: #377dff;
  font-size: 16px;
  font-weight: bold;
  ${(props) => props.theme.breakpoints.up('md')} {
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
