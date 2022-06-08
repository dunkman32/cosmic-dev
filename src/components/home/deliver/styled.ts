import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
  padding: 0 17px;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  ${(props) => props.theme.breakpoints.up('md')} {
    background-color: #377dff;
    border-radius: 300px 0 300px 0;
  }
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 19px 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-left: 123px;
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
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 100px;
    font-size: 40px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-left: 100px;
    font-size: 40px;
    max-width: 500px;
  }
`;

export const Desc = styled.span`
  font-size: 20px;
  margin-top: 26px;
  margin-left: 210px;
  font-weight: 500;
  line-height: 1.5;
  color: #d1e0fb;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 470px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 470px;
    margin-left: 166px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const LeftWrapper = styled.div`
  margin-right: 20px;
  margin-top: 20px;
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrappedTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 26px;
`;

export const WrappedDesc = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #d1e0fb;
  line-height: 1.5;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 450px;
    font-size: 20px;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  right: 300px;
  display: none;
  align-items: flex-end;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 492px;
    display: flex;
  }
`;
